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

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const fill = document.querySelector(".progress-fill");
  const text = document.querySelector(".progress-text");
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 2;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => {
          loader.style.display = "none";
        }, 800);
      }, 300);
    }
    fill.style.width = progress + "%";
    text.textContent = progress + "%";
  }, 120);
});

document.addEventListener("mousemove", (e) => {
  const stars = document.querySelector(".stars-layer img");
  const mountain = document.querySelector(".mountain-layer img");

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  stars.style.transform = `rotate(0deg) translate(${x * 0.3}px, ${y * 0.3}px)`;
  mountain.style.transform = `scaleY(0.8) translate(${x * 0.1}px, ${y * 0.1}px)`;
});
