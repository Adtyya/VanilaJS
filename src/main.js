import "./style.css";
import { Navbar } from "./components/Navbar.js";

const currentPage = window.location.pathname
  .split("/")
  .pop()
  .replace(".html", "");

const activePage = currentPage;

const navbarContainer = document.getElementById("navbar");
if (navbarContainer) {
  navbarContainer.innerHTML = Navbar(activePage);
}
