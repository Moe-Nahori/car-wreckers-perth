"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = require("path");
const quote_routes_1 = __importDefault(require("./routes/quote.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8005;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API routes
app.use('/api/quotes', quote_routes_1.default);
// Serve Next.js static files
app.use(express_1.default.static((0, path_1.join)(__dirname, '../../.next')));
app.use(express_1.default.static((0, path_1.join)(__dirname, '../../public')));
// Handle all other routes with Next.js
app.get('*', (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, '../../.next/server/pages/index.html'));
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
