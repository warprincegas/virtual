import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import "./style.css";

// Define routes
export const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

console.log(About);

// Function to navigate and load the correct page
function navigate() {
  const path = location.hash.slice(1) || "/"; // Get path from hash (default to home '/')
  const page = routes[path] || Home; // Default to Home if path is not found
  document.getElementById("app").innerHTML = page();
  console.log(document.querySelector("body"));
  // Render the page
}

// document.querySelector(".contact-link").addEventListener("click", () => {
//   document.querySelector(".contact-link").setAttribute("href", "#/contact");
// });

// Event listener for hash changes
window.addEventListener("hashchange", navigate);

// Load the initial route
window.addEventListener("load", navigate);
