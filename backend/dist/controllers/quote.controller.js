"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuote = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createQuote = async (req, res) => {
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
    }
    catch (error) {
        console.error('Error creating quote:', error);
        res.status(500).json({ error: 'Failed to create quote' });
    }
};
exports.createQuote = createQuote;
