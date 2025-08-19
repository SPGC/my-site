// Theme toggling with localStorage; respects system preference
(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    root.dataset.theme = saved;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.dataset.theme = "dark";
  }

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  }

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = !menu.classList.contains("open");
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Obfuscate mailto to reduce scraping
  const emailLinks = document.querySelectorAll("[data-email]");
  emailLinks.forEach(el => {
    const addr = el.getAttribute("data-email");
    if (addr) {
      el.setAttribute("href", "mailto:" + addr);
    }
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
