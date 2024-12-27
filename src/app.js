import { saveFormData } from "./formData";

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  saveFormData({ name, email, message });

  successMessage.classList.remove("is-hidden");

  form.reset();
});
