
const CONFIG = {
  whatsapp: "",
  email: "xh98499@gmail.com"
};

function openWhatsApp(message){
  if(!CONFIG.whatsapp){
    alert("WhatsApp number has not been added yet.");
    return;
  }
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url,"_blank");
}

document.querySelectorAll("[data-whatsapp]").forEach(el=>{
  el.addEventListener("click",(e)=>{
    e.preventDefault();
    openWhatsApp("Hello Chebubu Auto, I would like to request a quotation.");
  });
});
  
const form = document.getElementById("quoteForm");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fields = ["name","country","buyerType","budget","product","message"];
    const data = {};
    fields.forEach(id=>{
      const node = document.getElementById(id);
      data[id] = node ? node.value : "";
    });
    const subject = encodeURIComponent("Vehicle / Auto Parts Inquiry - Chebubu Auto");
    const body = encodeURIComponent(
`Name: ${data.name}
Country: ${data.country}
Buyer Type: ${data.buyerType}
Budget: ${data.budget}
Vehicle / Part: ${data.product}
Requirements: ${data.message}`
    );
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  });
}
document.addEventListener(...)
document.addEventListener("DOMContentLoaded",function(){

const btn=document.querySelector(".mobile-toggle");
const nav=document.querySelector(".nav-links");

if(btn && nav){

btn.addEventListener("click",function(){

nav.classList.toggle("active");

});

}

});
