import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import "./style.css";

export const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

document.addEventListener("DOMContentLoaded", function () {
  const loadingSpinner = document.querySelector(".loader");
  const appContent = document.getElementById("app");

  setTimeout(() => {
    loadingSpinner.style.display = "none";

    appContent.style.display = "block";
  }, 3000);
});

function navigate() {
  const path = location.hash.slice(1) || "/";
  const page = routes[path] || Home;
  document.getElementById("app").innerHTML = page();
  console.log(document.querySelector("body"));
}

window.addEventListener("hashchange", navigate);

window.addEventListener("load", navigate);
