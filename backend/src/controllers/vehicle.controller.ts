import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllVehicles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const vehicles = await prisma.vehicle.findMany({
      include: {
        parts: true,
        images: true,
      },
    });
    res.json(vehicles);
  } catch (error) {
    next(error);
  }
};

export const getVehicleById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
      include: {
        parts: true,
        images: true,
      },
    });
    if (!vehicle) {
      res.status(404).json({ error: 'Vehicle not found' });
      return;
    }
    res.json(vehicle);
  } catch (error) {
    next(error);
  }
};

export const createVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const vehicle = await prisma.vehicle.create({
      data: req.body,
      include: {
        parts: true,
        images: true,
      },
    });
    res.status(201).json(vehicle);
  } catch (error) {
    next(error);
  }
};

export const updateVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const vehicle = await prisma.vehicle.update({
      where: { id },
      data: req.body,
      include: {
        parts: true,
        images: true,
      },
    });
    res.json(vehicle);
  } catch (error) {
    next(error);
  }
};

export const deleteVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await prisma.vehicle.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};