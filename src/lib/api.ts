import { AppError, ERROR_CODES } from './error-handling';

interface ApiErrorResponse {
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}

interface ApiRequestConfig extends RequestInit {
  data?: any;
}

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export class ApiError extends AppError {
  public errors?: Record<string, string[]>;

  constructor(message: string, code: string = ERROR_CODES.SERVER_ERROR, status: number = 500, errors?: Record<string, string[]>) {
    super(message, code, status);
    this.errors = errors;
    this.name = 'ApiError';
  }
}

function getErrorCodeFromStatus(status: number): string {
  switch (status) {
    case 400:
      return ERROR_CODES.VALIDATION_ERROR;
    case 401:
      return ERROR_CODES.UNAUTHORIZED;
    case 403:
      return ERROR_CODES.FORBIDDEN;
    case 404:
      return ERROR_CODES.NOT_FOUND;
    default:
      return ERROR_CODES.SERVER_ERROR;
  }
}

export async function apiRequest<T>(endpoint: string, config: ApiRequestConfig = {}): Promise<T> {
  const { data, headers, ...customConfig } = config;
  
  try {
    const response = await fetch(endpoint, {
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      ...customConfig,
    });

    // Handle 204 No Content
    if (response.status === 204) {
      return {} as T;
    }

    // Try to parse JSON response
    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorResponse = responseData as ApiErrorResponse;
      
      throw new ApiError(
        errorResponse.message || 'An unexpected error occurred',
        errorResponse.code || getErrorCodeFromStatus(response.status),
        response.status,
        errorResponse.errors
      );
    }

    return responseData;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Handle network errors
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new ApiError(
        'Unable to connect to the server. Please check your internet connection.',
        ERROR_CODES.NETWORK_ERROR,
        0
      );
    }

    // Handle other errors
    throw new ApiError(
      error instanceof Error ? error.message : 'An unexpected error occurred',
      ERROR_CODES.SERVER_ERROR,
      500
    );
  }
}

// Utility functions for common API operations
export const api = {
  get: <T>(endpoint: string, config?: ApiRequestConfig) => 
    apiRequest<T>(endpoint, { ...config, method: 'GET' }),
    
  post: <T>(endpoint: string, data: any, config?: ApiRequestConfig) =>
    apiRequest<T>(endpoint, { ...config, method: 'POST', data }),
    
  put: <T>(endpoint: string, data: any, config?: ApiRequestConfig) =>
    apiRequest<T>(endpoint, { ...config, method: 'PUT', data }),
    
  patch: <T>(endpoint: string, data: any, config?: ApiRequestConfig) =>
    apiRequest<T>(endpoint, { ...config, method: 'PATCH', data }),
    
  delete: <T>(endpoint: string, config?: ApiRequestConfig) =>
    apiRequest<T>(endpoint, { ...config, method: 'DELETE' }),
};