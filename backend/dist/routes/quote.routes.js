"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quote_controller_1 = require("../controllers/quote.controller");
const router = express_1.default.Router();
router.post('/', quote_controller_1.createQuote);
exports.default = router;
