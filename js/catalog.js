document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.getElementById("productGrid"),search=document.getElementById("searchInput"),category=document.getElementById("categoryFilter"),sort=document.getElementById("sortFilter"),label=document.getElementById("resultsLabel"),empty=document.getElementById("emptyState");
 const params=new URLSearchParams(location.search);if(params.has("categoria"))category.value=params.get("categoria");
 function render(){
  let list=[...PRODUCTS];const term=search.value.trim().toLowerCase();
  if(term)list=list.filter(p=>(p.name+" "+p.description+" "+p.categoryLabel).toLowerCase().includes(term));
  if(category.value!=="todas")list=list.filter(p=>p.category===category.value);
  if(sort.value==="price-asc")list.sort((a,b)=>a.price-b.price);
  if(sort.value==="price-desc")list.sort((a,b)=>b.price-a.price);
  if(sort.value==="name")list.sort((a,b)=>a.name.localeCompare(b.name,"es"));
  label.textContent=`${list.length} producto(s) encontrado(s)`;
  empty.classList.toggle("d-none",list.length!==0);grid.classList.toggle("d-none",list.length===0);
  grid.innerHTML=list.map(p=>`<div class="col-6 col-lg-3"><article class="product-card">
   <div class="product-image-wrap"><img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy">${p.tag?`<span class="product-tag">${p.tag}</span>`:""}</div>
   <div class="product-info"><span class="product-category">${p.categoryLabel}</span><h3 class="product-name">${p.name}</h3><div class="product-actions"><span class="product-price">${formatPrice(p.price)}</span><button class="btn-add" data-add="${p.id}">Agregar +</button></div><button class="text-link mt-3 border-0 bg-transparent p-0" data-detail="${p.id}">Ver detalles</button></div>
  </article></div>`).join("");
 }
 [search,category,sort].forEach(el=>el.addEventListener(el===search?"input":"change",render));
 document.getElementById("clearFilters").addEventListener("click",()=>{search.value="";category.value="todas";sort.value="featured";render()});
 grid.addEventListener("click",event=>{
  const button=event.target.closest("[data-detail]");if(!button)return;
  const p=PRODUCTS.find(item=>item.id===Number(button.dataset.detail));if(!p)return;
  document.getElementById("productModalBody").innerHTML=`<div class="row g-4 align-items-center"><div class="col-md-6"><img class="modal-product-image" src="${p.image}" alt="${p.name}"></div><div class="col-md-6"><span class="product-category">${p.categoryLabel}</span><h2 class="product-name fs-2" id="productModalTitle">${p.name}</h2><p>${p.description}</p><h3 class="product-price">${formatPrice(p.price)}</h3><button class="btn btn-brand mt-3" data-add="${p.id}" data-bs-dismiss="modal">Agregar al carrito</button></div></div>`;
  bootstrap.Modal.getOrCreateInstance(document.getElementById("productModal")).show();
 });
 render();
});