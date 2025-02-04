"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContactStatus = exports.createContact = exports.getContactById = exports.getAllContacts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await prisma.contact.findMany();
        res.json(contacts);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllContacts = getAllContacts;
const getContactById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const contact = await prisma.contact.findUnique({
            where: { id },
        });
        if (!contact) {
            res.status(404).json({ error: 'Contact not found' });
            return;
        }
        res.json(contact);
    }
    catch (error) {
        next(error);
    }
};
exports.getContactById = getContactById;
const createContact = async (req, res, next) => {
    try {
        const contact = await prisma.contact.create({
            data: req.body,
        });
        res.status(201).json(contact);
    }
    catch (error) {
        next(error);
    }
};
exports.createContact = createContact;
const updateContactStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const contact = await prisma.contact.update({
            where: { id },
            data: { status },
        });
        res.json(contact);
    }
    catch (error) {
        next(error);
    }
};
exports.updateContactStatus = updateContactStatus;
const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.contact.delete({
            where: { id },
        });
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteContact = deleteContact;
