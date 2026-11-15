import { products } from '../data/products.js';
export const findAllProducts = () => products;
export const findProductById = (id) => products.find(product => product.id === Number(id));
