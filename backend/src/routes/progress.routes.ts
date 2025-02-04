import express from 'express';
import {
  getProgress,
  addTask,
  updateTask,
  deleteTask,
} from '../controllers/progress.controller';

const router = express.Router();

router.get('/', getProgress);
router.post('/', addTask);
router.put('/', updateTask);
router.delete('/', deleteTask);

export default router;