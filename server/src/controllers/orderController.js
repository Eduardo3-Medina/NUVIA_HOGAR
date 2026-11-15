import { createOrder, findAllOrders } from '../services/orderService.js';
export function postOrder(req, res) {
  const { customer, items } = req.body;
  if (!customer || !customer.name || !customer.email || !customer.phone || !customer.address || !customer.district) return res.status(400).json({ success: false, message: 'Completa todos los datos obligatorios del cliente.' });
  if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ success: false, message: 'El pedido debe incluir al menos un producto.' });
  if (!/^\S+@\S+\.\S+$/.test(customer.email)) return res.status(400).json({ success: false, message: 'El correo electrónico no tiene un formato válido.' });
  if (!/^\d{9}$/.test(customer.phone)) return res.status(400).json({ success: false, message: 'El teléfono debe contener 9 dígitos.' });
  try { const order = createOrder({ customer, items }); return res.status(201).json({ success: true, message: 'Pedido registrado correctamente.', data: order }); }
  catch (error) { return res.status(400).json({ success: false, message: error.message }); }
}
export function getOrders(req, res) { res.json({ success: true, count: findAllOrders().length, data: findAllOrders() }); }
