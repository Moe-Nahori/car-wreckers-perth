"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_controller_1 = require("../controllers/vehicle.controller");
const router = (0, express_1.Router)();
router.get('/', vehicle_controller_1.getAllVehicles);
router.get('/:id', vehicle_controller_1.getVehicleById);
router.post('/', vehicle_controller_1.createVehicle);
router.put('/:id', vehicle_controller_1.updateVehicle);
router.delete('/:id', vehicle_controller_1.deleteVehicle);
exports.default = router;
