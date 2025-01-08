import { submitLoginForm } from "./submitLoginForm";

const form = document.querySelector("#loginForm");

form.addEventListener("submit", (even) => {
  event.preventDefault();
  submitLoginForm(event);
 
});

 let token = localStorage.getItem("token");
 if (token) {
   window.location.href = "/";
 }