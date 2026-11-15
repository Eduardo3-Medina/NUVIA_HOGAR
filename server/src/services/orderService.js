import { randomUUID } from 'node:crypto';
import { findProductById } from './productService.js';
const orders = [];
export function createOrder({ customer, items }) {
  const normalizedItems = items.map(item => {
    const product = findProductById(item.productId);
    if (!product) throw new Error(`El producto ${item.productId} no existe.`);
    if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 20) throw new Error('La cantidad debe estar entre 1 y 20 unidades.');
    return { productId: product.id, name: product.name, unitPrice: product.price, quantity: item.quantity, subtotal: Number((product.price * item.quantity).toFixed(2)) };
  });
  const total = Number(normalizedItems.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2));
  const order = { id: `NH-${Date.now()}-${randomUUID().slice(0,6).toUpperCase()}`, customer, items: normalizedItems, total, status: 'REGISTRADO', createdAt: new Date().toISOString() };
  orders.unshift(order);
  return order;
}
export const findAllOrders = () => orders;
