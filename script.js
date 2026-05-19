document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.contains("open");
      if (isOpen) {
        mainNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        mainNav.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Intersection Observer for Animations
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("in-view"));
  }

  // WhatsApp Widget Logic
  const waOpenBtn = document.querySelector(".wa-open");
  const waCloseBtn = document.querySelector(".wa-close");
  const waPanel = document.querySelector(".wa-panel");
  const waScrollTopBtn = document.querySelector(".wa-scroll-top");
  const waOptions = document.querySelectorAll(".wa-option");
  const waStartBtn = document.querySelector(".wa-start-btn");

  const waNumber = "919995550353";
  let activeMessage = "Hi Hox Ai Tutor, I need more details.";

  const buildWaLink = (message) => {
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  if (waOpenBtn && waPanel && waCloseBtn) {
    waOpenBtn.addEventListener("click", () => {
      waPanel.hidden = false;
    });

    waCloseBtn.addEventListener("click", () => {
      waPanel.hidden = true;
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        waPanel.hidden = true;
      }
    });
  }

  if (waScrollTopBtn) {
    waScrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (waOptions.length > 0 && waStartBtn) {
    waOptions.forEach(btn => {
      btn.addEventListener("click", (e) => {
        // Remove active class from all
        waOptions.forEach(opt => opt.classList.remove("active"));
        // Add to clicked
        e.target.classList.add("active");
        
        // Update active message based on the button's data attribute or text content
        // Since we don't have the original state array easily accessible in DOM, 
        // we'll map them via data attributes in the HTML.
        activeMessage = e.target.getAttribute("data-msg") || activeMessage;
        waStartBtn.href = buildWaLink(activeMessage);
      });
    });
    
    // Initialize href
    waStartBtn.href = buildWaLink(activeMessage);
  }
});
