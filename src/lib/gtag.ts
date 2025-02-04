// Basic event type
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// Form submission event type
type FormSubmissionEvent = {
  formType: 'quote' | 'contact' | 'testimonial';
  carMake?: string;
  carModel?: string;
  location?: string;
};

// Dummy implementation since we're not using Google Analytics
export const pageview = (_url: string) => {
  // No-op
};

export const event = (_event: GTagEvent) => {
  // No-op
};

export const trackFormSubmission = (_event: FormSubmissionEvent) => {
  // No-op
};

export const trackPhoneClick = (_phoneNumber: string, _location?: string) => {
  // No-op
};

export const trackLocationVisit = (_location: string) => {
  // No-op
};

export const trackCarModelVisit = (_make: string, _model: string) => {
  // No-op
};

export const trackServiceVisit = (_service: string) => {
  // No-op
};

export const trackQuoteRequest = (_carDetails: {
  make: string;
  model: string;
  year?: string;
  condition?: string;
}) => {
  // No-op
};