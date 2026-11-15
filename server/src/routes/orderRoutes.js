import { Router } from 'express';
import { getOrders, postOrder } from '../controllers/orderController.js';
const router = Router();
router.get('/', getOrders);
router.post('/', postOrder);
export default router;
