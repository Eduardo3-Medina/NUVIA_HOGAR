const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || 'No se pudo completar la solicitud.');
  return payload;
}

export const productService = {
  getAll: () => request('/products'),
  getById: (id) => request(`/products/${id}`),
};
export const orderService = {
  create: (order) => request('/orders', { method: 'POST', body: JSON.stringify(order) }),
  getAll: () => request('/orders'),
};
