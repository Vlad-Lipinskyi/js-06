const e=document.getElementById("contact-form"),t=document.getElementById("success-message");e.addEventListener("submit",function(s){s.preventDefault(),console.log("Дані форми:",{name:s.target.name.value,email:s.target.email.value,message:s.target.message.value}),t.classList.remove("is-hidden"),e.reset()});
//# sourceMappingURL=index.affbf152.js.map
