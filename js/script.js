// Mobile menu toggle
document.getElementById("mobile-menu-button")?.addEventListener("click", function () {
  document.getElementById("mobile-menu")?.classList.toggle("hidden");
});

// Utility to load AOS only once
function initAOS() {
  if (typeof AOS !== "undefined" && !AOS._initialized) {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }
}

// Initial check in case preloader is not present or already loaded
initAOS();

// Progress Bar & Preloader
const bar = document.getElementById("loading-bar");
const preloader = document.getElementById("preloader");
const content = document.getElementById("main-content");
const hasLoaded = sessionStorage.getItem("hasLoaded");

if (preloader && content && bar) {
  const finishLoading = () => {
    preloader.style.display = "none";
    content.classList.remove("opacity-0", "pointer-events-none", "hidden");
    content.classList.add("opacity-100");
    document.getElementById("aos-css")?.removeAttribute("disabled");

    // Load AOS dynamically if not already present
    if (typeof AOS === 'undefined') {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/aos@2.3.4/dist/aos.js";
      script.onload = () => {
        initAOS();
      };
      document.body.appendChild(script);
    } else {
      initAOS();
    }
  };

  if (hasLoaded) {
    finishLoading();
  } else {
    let progress = 0;
    const simulateLoading = setInterval(() => {
      progress += 5;
      bar.style.width = progress + "%";
      if (progress >= 100) {
        clearInterval(simulateLoading);
        sessionStorage.setItem("hasLoaded", "true");
        // Slight delay to show full bar before hiding
        setTimeout(finishLoading, 200);
      }
    }, 50); // Faster loading simulation
  }
}

// Contact Form Handler
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        successMessage?.classList.remove("hidden");
        form.reset();
      } else {
        alert("Terjadi kesalahan, coba lagi.");
      }
    } catch (err) {
      alert("Gagal mengirim form.");
    }
  });
}

// --- Vue 3 Factory Functions --- //
const { createApp } = Vue;

/**
 * Creates a carousel app instance for a given selector.
 * @param {string} selector - The DOM ID selector (e.g., "#app-onboarding").
 * @param {string[]} images - Array of image paths.
 */
function createCarouselApp(selector, images) {
  const element = document.querySelector(selector);
  if (!element) return; // Skip if element doesn't exist on this page

  createApp({
    data() {
      return {
        screens: images,
        currentIndex: 0,
      };
    },
    methods: {
      getPosition(index) {
        const len = this.screens.length;
        const center = this.currentIndex;
        // Proper modulo for negative numbers not needed here since we only increment, but good practice:
        // (n % m + m) % m
        const left = (center - 1 + len) % len;
        const right = (center + 1) % len;

        if (index === center) {
          return "left-1/2 -translate-x-1/2 scale-100 z-30 opacity-100";
        } else if (index === left) {
          return "left-[10%] scale-90 z-20 opacity-80";
        } else if (index === right) {
          return "left-[75%] -translate-x-1/2 scale-90 z-20 opacity-80";
        } else {
          return "hidden";
        }
      },
    },
    mounted() {
      // Auto-slide every 3 seconds
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.screens.length;
      }, 3000);
    },
  }).mount(selector);
}

/**
 * Creates an auto-scrolling image app instance.
 * @param {string} selector - The DOM ID selector.
 * @param {number} containerHeight - Height of the container (default 600).
 */
function createScrollApp(selector, containerHeight = 600) {
  const element = document.querySelector(selector);
  if (!element) return;

  createApp({
    data() {
      return {
        scrollOffset: 0,
        direction: 1,
        pauseScroll: false,
        imageHeight: 0,
        containerHeight: containerHeight,
        speed: 1, // pixel per step
      };
    },
    mounted() {
      const img = this.$refs.scrollImage;
      if (!img) return;

      const updateImageHeight = () => {
        this.imageHeight = img.offsetHeight;
      };

      img.onload = updateImageHeight;

      if (img.complete) {
        updateImageHeight();
      }

      // Start scroll loop
      setInterval(() => {
        if (this.pauseScroll) return;
        // If image hasn't loaded or is shorter than container, don't scroll
        if (this.imageHeight <= this.containerHeight) return;

        const maxScroll = this.imageHeight - this.containerHeight;

        if (this.scrollOffset >= maxScroll) {
          this.direction = -1;
        } else if (this.scrollOffset <= 0) {
          this.direction = 1;
        }

        this.scrollOffset += this.speed * this.direction;
      }, 30);
    },
  }).mount(selector);
}

// --- Initialize Carousel Apps (Teras Budaya & PawPals) --- //

// Teras Budaya
createCarouselApp("#app-onboarding", [
  "img/TB/Loading Screen1.png",
  "img/TB/Loading Screen2.png",
  "img/TB/Loading Screen3.png",
]);
createCarouselApp("#app-home", [
  "img/TB/Home Screen1.png",
  "img/TB/Home Screen2.png",
  "img/TB/Home Screen3.png",
]);
createCarouselApp("#app-education", [
  "img/TB/Edu Screen1.png",
  "img/TB/Edu Screen2.png",
  "img/TB/Edu Screen3.png",
]);
createCarouselApp("#app-profile", [
  "img/TB/Profile Screen1.png",
  "img/TB/Profile Screen2.png",
  "img/TB/Profile Screen3.png",
]);

// PawPals
createCarouselApp("#app-onboarding-pp", [
  "img/PP/Onboarding1.png",
  "img/PP/Onboarding2.png",
  "img/PP/Onboarding3.png",
]);
createCarouselApp("#app-home-pp", [
  "img/PP/Home1.png",
  "img/PP/Home2.png",
  "img/PP/Home3.png",
]);
createCarouselApp("#app-community-pp", [
  "img/PP/Community1.png",
  "img/PP/Community2.png",
  "img/PP/Community3.png",
]);
createCarouselApp("#app-schedule-pp", [
  "img/PP/Schedule1.png",
  "img/PP/Schedule2.png",
  "img/PP/Schedule3.png",
]);

// --- Initialize Scroll Apps (Mentor Kita) --- //
// Note: container height in HTML might be dynamic (lg:h-[600px]), 
// but consistency with the JS default check is important. 
// If specific heights differ per ID, we can pass them as the 2nd arg.
createScrollApp("#app-dashboard-mk");
createScrollApp("#app-search-mk");
createScrollApp("#app-mentor-mk");
createScrollApp("#app-profile-mk");