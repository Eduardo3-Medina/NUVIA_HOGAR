document.addEventListener("DOMContentLoaded",()=>{
 const cart=getCart(),items=document.getElementById("checkoutItems"),totalEl=document.getElementById("checkoutTotal"),form=document.getElementById("checkoutForm"),success=document.getElementById("orderSuccess");
 const total=cart.reduce((sum,item)=>{const p=PRODUCTS.find(product=>product.id===item.id);return sum+(p?p.price*item.quantity:0)},0);
 if(!cart.length){items.innerHTML='<p class="text-secondary">No hay productos en tu carrito.</p>';form.classList.add("d-none");success.classList.remove("d-none");success.innerHTML='<h2>Tu carrito está vacío</h2><a href="productos.html" class="btn btn-brand mt-2">Volver al catálogo</a>';return}
 items.innerHTML=cart.map(item=>{const p=PRODUCTS.find(product=>product.id===item.id);return p?`<div class="summary-row"><span>${p.name} × ${item.quantity}</span><strong>${formatPrice(p.price*item.quantity)}</strong></div>`:""}).join("");totalEl.textContent=formatPrice(total);
 form.addEventListener("submit",event=>{
  event.preventDefault();event.stopPropagation();
  if(!form.checkValidity()){form.classList.add("was-validated");return}
  const orderNumber="NV-"+Date.now().toString().slice(-7);const customer=document.getElementById("fullName").value.trim();
  localStorage.setItem("nuviaLastOrder",JSON.stringify({orderNumber,customer,total,createdAt:new Date().toISOString()}));
  form.classList.add("d-none");success.classList.remove("d-none");success.innerHTML=`<h2>¡Gracias por tu pedido, ${customer}!</h2><p>Tu pedido de demostración fue generado correctamente.</p><p><strong>Número de pedido:</strong> ${orderNumber}</p><p><strong>Total:</strong> ${formatPrice(total)}</p><a href="../index.html" class="btn btn-brand mt-2">Volver al inicio</a>`;
  localStorage.removeItem(CART_KEY);updateCartCount();
 });
});