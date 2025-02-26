"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: err.message || 'Internal Server Error',
        statusCode,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        ...(err.errors && { errors: err.errors })
    });
};
exports.errorHandler = errorHandler;
