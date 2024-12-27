const e=document.getElementById("contact-form"),t=document.getElementById("success-message");e.addEventListener("submit",function(s){s.preventDefault();let n=new FormData(e);console.log("Дані форми:",{name:n.get("name"),email:n.get("email"),message:n.get("message")}),t.classList.remove("is-hidden"),e.reset()});
//# sourceMappingURL=index.024d4252.js.map
