declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}