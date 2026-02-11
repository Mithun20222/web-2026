document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".main-nav a");
  const sections = document.querySelectorAll(".section");
  document.getElementById("intro").classList.add("active");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-section");
      navLinks.forEach(nav => nav.classList.remove("active"));
      sections.forEach(section => section.classList.remove("active"));
      this.classList.add("active");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
