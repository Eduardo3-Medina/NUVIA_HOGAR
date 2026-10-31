document.addEventListener("DOMContentLoaded",()=>{
 const container=document.getElementById("cartItems");
 function render(){
  const cart=getCart();let subtotal=0;
  if(!cart.length){container.innerHTML='<div class="empty-cart"><h2 class="h4">Tu carrito está vacío</h2><p class="text-secondary">Todavía no has agregado productos.</p><a class="btn btn-brand" href="productos.html">Explorar productos</a></div>';}
  else{container.innerHTML=cart.map(item=>{const p=PRODUCTS.find(product=>product.id===item.id);if(!p)return "";subtotal+=p.price*item.quantity;return `<article class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${p.categoryLabel}</p><div class="quantity-control"><button data-quantity="${p.id}" data-change="-1" aria-label="Reducir cantidad">−</button><span>${item.quantity}</span><button data-quantity="${p.id}" data-change="1" aria-label="Aumentar cantidad">+</button><button class="remove-link" data-remove="${p.id}">Eliminar</button></div></div><strong class="cart-item-price">${formatPrice(p.price*item.quantity)}</strong></article>`}).join("");}
  document.getElementById("cartSubtotal").textContent=formatPrice(subtotal);document.getElementById("cartTotal").textContent=formatPrice(subtotal);
  document.getElementById("checkoutButton").classList.toggle("disabled",cart.length===0);document.getElementById("checkoutButton").setAttribute("aria-disabled",String(cart.length===0));updateCartCount();
 }
 container.addEventListener("click",event=>{
  const qty=event.target.closest("[data-quantity]"),remove=event.target.closest("[data-remove]");let cart=getCart();
  if(qty){const item=cart.find(p=>p.id===Number(qty.dataset.quantity));if(item){item.quantity+=Number(qty.dataset.change);if(item.quantity<=0)cart=cart.filter(p=>p.id!==item.id);saveCart(cart);render()}}
  if(remove){saveCart(cart.filter(p=>p.id!==Number(remove.dataset.remove)));render()}
 });
 document.getElementById("checkoutButton").addEventListener("click",event=>{if(!getCart().length)event.preventDefault()});
 render();
});