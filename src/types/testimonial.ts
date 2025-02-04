export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  carModel?: string;
  service?: string;
  date: string;
  verified: boolean;
}