export function Navbar(activePage = "") {
  return `
    <nav class="bg-white shadow-md">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold text-gray-800">=)</h1>
        <ul class="flex gap-6 text-gray-600">
          <li>
            <a href="dashboard.html" class="${
              activePage === "dashboard"
                ? "text-blue-600 font-medium"
                : "hover:text-blue-600"
            }">Dashboard</a>
          </li>
          <li>
            <a href="tracking.html" class="${
              activePage === "tracking"
                ? "text-blue-600 font-medium"
                : "hover:text-blue-600"
            }">Tracking</a>
          </li>
          <li>
            <a href="stock.html" class="${
              activePage === "stock"
                ? "text-blue-600 font-medium"
                : "hover:text-blue-600"
            }">Stok</a>
          </li>
          <li>
            <a href="#" class="${
              activePage === "histori"
                ? "text-blue-600 font-medium"
                : "hover:text-blue-600"
            }">Histori</a>
          </li>
        </ul>
        <a
          href="login.html"
          class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </a>
      </div>
    </nav>
  `;
}
