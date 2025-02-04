import express from 'express';
import cors from 'cors';
import { join } from 'path';
import quoteRoutes from './routes/quote.routes';
import progressRoutes from './routes/progress.routes';

const app = express();
const port = process.env.PORT || 8005;

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// API routes
app.use('/api/quotes', quoteRoutes);
app.use('/api/progress', progressRoutes);

// Serve Next.js build output
app.use('/_next', express.static(join(__dirname, '../../.next')));
app.use(express.static(join(__dirname, '../../public')));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../../.next/server/app/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});