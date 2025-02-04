import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllParts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parts = await prisma.part.findMany({
      include: {
        vehicle: true,
        images: true,
      },
    });
    res.json(parts);
  } catch (error) {
    next(error);
  }
};

export const getPartById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const part = await prisma.part.findUnique({
      where: { id },
      include: {
        vehicle: true,
        images: true,
      },
    });
    if (!part) {
      res.status(404).json({ error: 'Part not found' });
      return;
    }
    res.json(part);
  } catch (error) {
    next(error);
  }
};

export const createPart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const part = await prisma.part.create({
      data: req.body,
      include: {
        vehicle: true,
        images: true,
      },
    });
    res.status(201).json(part);
  } catch (error) {
    next(error);
  }
};

export const updatePart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const part = await prisma.part.update({
      where: { id },
      data: req.body,
      include: {
        vehicle: true,
        images: true,
      },
    });
    res.json(part);
  } catch (error) {
    next(error);
  }
};

export const deletePart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await prisma.part.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const searchParts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { q } = req.query;
    const parts = await prisma.part.findMany({
      where: {
        OR: [
          { name: { contains: String(q), mode: 'insensitive' } },
          { description: { contains: String(q), mode: 'insensitive' } },
        ],
      },
      include: {
        vehicle: true,
        images: true,
      },
    });
    res.json(parts);
  } catch (error) {
    next(error);
  }
};

export const getPartsByCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.params;
    const parts = await prisma.part.findMany({
      where: {
        category: {
          equals: category,
          mode: 'insensitive',
        },
      },
      include: {
        vehicle: true,
        images: true,
      },
    });
    res.json(parts);
  } catch (error) {
    next(error);
  }
};