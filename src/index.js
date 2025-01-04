import { saveFormData } from "./formData";

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
};

  saveFormData(formData);

  successMessage.classList.remove("is-hidden");

  form.reset();
});
