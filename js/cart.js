// Funciones compartidas para administrar el carrito usando localStorage.
const CART_KEY = "nuviaHogarCart";
function getCart(){
 try{
  const stored=JSON.parse(localStorage.getItem(CART_KEY));
  if(!Array.isArray(stored))return [];
  return stored.filter(item=>item&&Number.isInteger(item.id)&&Number.isInteger(item.quantity)&&item.quantity>0);
 }catch(error){return []}
}
function saveCart(cart){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCartCount()}
function addToCart(productId){
 const product=PRODUCTS.find(item=>item.id===Number(productId));if(!product)return;
 const cart=getCart();const existing=cart.find(item=>item.id===product.id);
 if(existing)existing.quantity+=1;else cart.push({id:product.id,quantity:1});
 saveCart(cart);showToast(`${product.name} se agregó al carrito.`);
}
function updateCartCount(){
 const count=getCart().reduce((sum,item)=>sum+item.quantity,0);
 document.querySelectorAll("#cartCount").forEach(el=>el.textContent=count);
}
function formatPrice(value){return new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format(value)}
function showToast(message){
 const toastEl=document.getElementById("appToast");const messageEl=document.getElementById("toastMessage");
 if(!toastEl||!window.bootstrap)return;
 messageEl.textContent=message;bootstrap.Toast.getOrCreateInstance(toastEl,{delay:2400}).show();
}