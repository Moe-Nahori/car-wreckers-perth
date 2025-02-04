"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartsByCategory = exports.searchParts = exports.deletePart = exports.updatePart = exports.createPart = exports.getPartById = exports.getAllParts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllParts = async (req, res, next) => {
    try {
        const parts = await prisma.part.findMany({
            include: {
                vehicle: true,
                images: true,
            },
        });
        res.json(parts);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllParts = getAllParts;
const getPartById = async (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.getPartById = getPartById;
const createPart = async (req, res, next) => {
    try {
        const part = await prisma.part.create({
            data: req.body,
            include: {
                vehicle: true,
                images: true,
            },
        });
        res.status(201).json(part);
    }
    catch (error) {
        next(error);
    }
};
exports.createPart = createPart;
const updatePart = async (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.updatePart = updatePart;
const deletePart = async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.part.delete({
            where: { id },
        });
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.deletePart = deletePart;
const searchParts = async (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.searchParts = searchParts;
const getPartsByCategory = async (req, res, next) => {
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
    }
    catch (error) {
        next(error);
    }
};
exports.getPartsByCategory = getPartsByCategory;
