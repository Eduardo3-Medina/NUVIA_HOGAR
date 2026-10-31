document.addEventListener("DOMContentLoaded",()=>{
 const form=document.getElementById("contactForm"),success=document.getElementById("contactSuccess");
 form.addEventListener("submit",event=>{event.preventDefault();event.stopPropagation();if(!form.checkValidity()){form.classList.add("was-validated");return}success.classList.remove("d-none");form.reset();form.classList.remove("was-validated")});
});