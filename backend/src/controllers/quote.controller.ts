import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createQuote = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message, partInfo } = req.body;
    
    const quote = await prisma.quote.create({
      data: {
        name,
        email,
        phone,
        message,
        partInfo,
        status: 'pending'
      }
    });

    res.status(201).json(quote);
  } catch (error) {
    console.error('Error creating quote:', error);
    res.status(500).json({ error: 'Failed to create quote' });
  }
};