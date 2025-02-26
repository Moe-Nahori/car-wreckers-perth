"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const part_controller_1 = require("../controllers/part.controller");
const router = (0, express_1.Router)();
router.get('/', part_controller_1.getAllParts);
router.get('/search', part_controller_1.searchParts);
router.get('/category/:category', part_controller_1.getPartsByCategory);
router.get('/:id', part_controller_1.getPartById);
router.post('/', part_controller_1.createPart);
router.put('/:id', part_controller_1.updatePart);
router.delete('/:id', part_controller_1.deletePart);
exports.default = router;
