import "./style.css";
import { Navbar, setupLogout } from "./components/Navbar.js";

const protectedPages = ["dashboard", "tracking", "stock"];
const publicPages = ["login", "register"];

const currentPage = window.location.pathname
  .split("/")
  .pop()
  .replace(".html", "");

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn && protectedPages.includes(currentPage)) {
  window.location.href = "index.html";
}

if (isLoggedIn && publicPages.includes(currentPage)) {
  window.location.href = "dashboard.html";
}

const navbarContainer = document.getElementById("navbar");
if (navbarContainer) {
  navbarContainer.innerHTML = Navbar(currentPage);
  setupLogout();
}
