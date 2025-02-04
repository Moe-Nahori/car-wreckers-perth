# iCar Wreckers Perth

A modern, SEO-optimized website for iCar Wreckers Perth, built with Next.js 14 and TypeScript.

## Technology Stack

- **Frontend Framework**: Next.js 14+
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Database**: PostgreSQL (Coming soon)
- **ORM**: Prisma (Coming soon)
- **Hosting**: Crazy Domains (Australian Data Center)

## Features

- Modern, responsive design
- SEO optimized
- Comprehensive car removal service information
- Quote request system
- Location-based service areas
- Car make/model specific pages
- Legal documentation
- Loading states and error handling
- SVG Favicon

## Project Structure

```
/src
  /app (Next.js pages)
  /components
    /ui (reusable UI components)
    /layout (layout components)
    /features (feature-specific components)
  /lib (utilities and helpers)
  /services (API services)
  /types (TypeScript types)
  /hooks (custom hooks)
  /styles (global styles)
  /config (configuration files)
/public (static assets)
/prisma (database schema)
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Moe-Nahori/car-wreckers-perth.git
```

2. Install dependencies:
```bash
cd car-wreckers-perth
npm install
```

3. Create a `.env` file in the root directory and add required environment variables:
```env
DATABASE_URL="your-database-url"
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## Building for Production

```bash
npm run build
```

## Backend Features (Coming Soon)

- Quote System API
- Testimonial System API
- Contact Form API
- Chat System
- Admin Dashboard
- Booking Calendar

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.

## Contact

For any inquiries, please contact us at info@icarwreckers.com.au