// Rabt website — mobile navigation, email-app contact form, and footer year

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

function closeMenu() {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
}

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = `Website inquiry from ${form.get("name")} (${form.get("org") || "—"})`;
  const body = [
    `Name: ${form.get("name")}`,
    `Organization: ${form.get("org")}`,
    `Email: ${form.get("email")}`,
    `Type: ${form.get("type")}`,
    `Service: ${form.get("service")}`,
    "",
    String(form.get("message") || "")
  ].join("\n");
  window.location.href = `mailto:rabtsupplychain@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
