document.addEventListener("DOMContentLoaded",()=>{
 updateCartCount();
 document.querySelectorAll(".current-year").forEach(el=>el.textContent=new Date().getFullYear());
 const featured=document.getElementById("featuredProducts");
 if(featured){
  featured.innerHTML=PRODUCTS.slice(0,4).map(product=>`
   <div class="col-6 col-lg-3"><article class="product-card">
    <div class="product-image-wrap"><img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">${product.tag?`<span class="product-tag">${product.tag}</span>`:""}</div>
    <div class="product-info"><span class="product-category">${product.categoryLabel}</span><h3 class="product-name">${product.name}</h3>
    <div class="product-actions"><span class="product-price">${formatPrice(product.price)}</span><button class="btn-add" data-add="${product.id}">Agregar +</button></div></div>
   </article></div>`).join("");
 }
 document.addEventListener("click",event=>{const button=event.target.closest("[data-add]");if(button)addToCart(button.dataset.add)});
});