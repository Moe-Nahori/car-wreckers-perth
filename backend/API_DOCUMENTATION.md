# Car Wreckers Perth API Documentation

Base URL: `http://localhost:8005/api`

## Vehicles Endpoints

### GET /vehicles
- Description: Get all vehicles
- Query Parameters:
  - page (optional): Page number for pagination
  - limit (optional): Number of items per page
  - search (optional): Search term for vehicle make/model
- Response: Array of vehicle objects

### GET /vehicles/:id
- Description: Get a specific vehicle by ID
- Parameters:
  - id: Vehicle ID
- Response: Single vehicle object with parts

### POST /vehicles
- Description: Create a new vehicle
- Body:
  ```json
  {
    "make": "string",
    "model": "string",
    "year": "number",
    "description": "string",
    "condition": "string"
  }
  ```
- Response: Created vehicle object

### PUT /vehicles/:id
- Description: Update a vehicle
- Parameters:
  - id: Vehicle ID
- Body: Same as POST
- Response: Updated vehicle object

### DELETE /vehicles/:id
- Description: Delete a vehicle
- Parameters:
  - id: Vehicle ID
- Response: Success message

## Parts Endpoints

### GET /parts
- Description: Get all parts
- Query Parameters:
  - page (optional): Page number
  - limit (optional): Items per page
  - inStock (optional): Filter by availability
- Response: Array of part objects

### GET /parts/search
- Description: Search parts
- Query Parameters:
  - q: Search term
  - category (optional): Filter by category
- Response: Array of matching parts

### GET /parts/category/:category
- Description: Get parts by category
- Parameters:
  - category: Part category name
- Response: Array of parts in category

### GET /parts/:id
- Description: Get specific part details
- Parameters:
  - id: Part ID
- Response: Single part object with vehicle info

### POST /parts
- Description: Create a new part
- Body:
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number",
    "condition": "string",
    "category": "string",
    "vehicleId": "string",
    "inStock": "boolean"
  }
  ```
- Response: Created part object

### PUT /parts/:id
- Description: Update a part
- Parameters:
  - id: Part ID
- Body: Same as POST
- Response: Updated part object

### DELETE /parts/:id
- Description: Delete a part
- Parameters:
  - id: Part ID
- Response: Success message

## Quote Endpoints

### POST /quotes
- Description: Create a new quote request
- Body:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "message": "string",
    "partInfo": "string"
  }
  ```
- Response: Created quote object

### GET /quotes
- Description: Get all quotes (admin only)
- Query Parameters:
  - status (optional): Filter by status
  - page (optional): Page number
- Response: Array of quote objects

### GET /quotes/:id
- Description: Get specific quote details (admin only)
- Parameters:
  - id: Quote ID
- Response: Single quote object

### PUT /quotes/:id/status
- Description: Update quote status (admin only)
- Parameters:
  - id: Quote ID
- Body:
  ```json
  {
    "status": "string" // pending, processed, completed, cancelled
  }
  ```
- Response: Updated quote object

### DELETE /quotes/:id
- Description: Delete a quote (admin only)
- Parameters:
  - id: Quote ID
- Response: Success message

## Contact Endpoints

### POST /contact
- Description: Submit a contact form
- Body:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "message": "string"
  }
  ```
- Response: Created contact object

### GET /contact
- Description: Get all contact submissions (admin only)
- Query Parameters:
  - status (optional): Filter by status
  - page (optional): Page number
- Response: Array of contact objects

### GET /contact/:id
- Description: Get specific contact details (admin only)
- Parameters:
  - id: Contact ID
- Response: Single contact object

### PUT /contact/:id/status
- Description: Update contact status (admin only)
- Parameters:
  - id: Contact ID
- Body:
  ```json
  {
    "status": "string" // unread, read, responded
  }
  ```
- Response: Updated contact object

### DELETE /contact/:id
- Description: Delete a contact submission (admin only)
- Parameters:
  - id: Contact ID
- Response: Success message

## Error Responses

All endpoints can return the following error responses:

### 400 Bad Request
```json
{
  "error": "Validation Error",
  "details": ["Error details here"]
}
```

### 401 Unauthorized
```json
{
  "error": "Unauthorized",
  "message": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "error": "Forbidden",
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong"
}
```

## Authentication

Protected routes (admin only) require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_token_here>
```