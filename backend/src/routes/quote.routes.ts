import express from 'express';
import { createQuote } from '../controllers/quote.controller';

const router = express.Router();

router.post('/', createQuote);

export default router;