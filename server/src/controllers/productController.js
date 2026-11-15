import { findAllProducts, findProductById } from '../services/productService.js';
export function getProducts(req, res) { res.json({ success: true, count: findAllProducts().length, data: findAllProducts() }); }
export function getProduct(req, res) {
  const product = findProductById(req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Producto no encontrado.' });
  return res.json({ success: true, data: product });
}
