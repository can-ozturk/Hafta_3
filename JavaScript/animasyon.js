document.addEventListener("DOMContentLoaded", () => {
  // Görüntüle butonlarına hover animasyonu
  const buttons = document.querySelectorAll("td button");
  buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.05)";
      button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    });
  });

  // Sayfa yüklenince yumuşak fade-in animasyonu
  const fadeElements = document.querySelectorAll("h1, h2, p, table, ul, div, ol, li");
  fadeElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.2s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 200 * index);
  });

  // Bölümler ekrana geldiğinde animasyon
  const sections = document.querySelectorAll(".platform, .hakkimda_platform, .kampanya_platform");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideFadeIn 0.2s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  sections.forEach(section => observer.observe(section));

  // Form elemanları giriş animasyonu
  const elements = document.querySelectorAll(".form-group, button");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateX(100px)";
    el.style.transition = `all 0.2s ease-out ${index * 0.1}s`;
  });
  setTimeout(() => {
    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    });
  }, 100);
});
