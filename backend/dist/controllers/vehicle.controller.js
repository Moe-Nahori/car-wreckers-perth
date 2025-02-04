"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle = exports.updateVehicle = exports.createVehicle = exports.getVehicleById = exports.getAllVehicles = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllVehicles = async (req, res, next) => {
    try {
        const vehicles = await prisma.vehicle.findMany({
            include: {
                parts: true,
                images: true,
            },
        });
        res.json(vehicles);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllVehicles = getAllVehicles;
const getVehicleById = async (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.getVehicleById = getVehicleById;
const createVehicle = async (req, res, next) => {
    try {
        const vehicle = await prisma.vehicle.create({
            data: req.body,
            include: {
                parts: true,
                images: true,
            },
        });
        res.status(201).json(vehicle);
    }
    catch (error) {
        next(error);
    }
};
exports.createVehicle = createVehicle;
const updateVehicle = async (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.updateVehicle = updateVehicle;
const deleteVehicle = async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.vehicle.delete({
            where: { id },
        });
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteVehicle = deleteVehicle;
