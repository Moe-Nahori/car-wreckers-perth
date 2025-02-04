import { Router } from 'express';
import {
  getAllParts,
  getPartById,
  createPart,
  updatePart,
  deletePart,
  searchParts,
  getPartsByCategory
} from '../controllers/part.controller';

const router = Router();

router.get('/', getAllParts);
router.get('/search', searchParts);
router.get('/category/:category', getPartsByCategory);
router.get('/:id', getPartById);
router.post('/', createPart);
router.put('/:id', updatePart);
router.delete('/:id', deletePart);

export default router;