let progress = 0;
const bar = document.getElementById('loading-bar');
const preloader = document.getElementById('preloader');
const content = document.getElementById('main-content');

const simulateLoading = setInterval(() => {
  if (progress >= 100) {
    clearInterval(simulateLoading);

    // Sembunyikan preloader
    preloader.style.display = 'none';

    // Tampilkan konten
    content.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
    content.classList.add('opacity-100');

    // Aktifkan CSS AOS
    document.getElementById('aos-css').removeAttribute('disabled');

    // Delay sedikit sebelum AOS init agar elemen sudah muncul di layar
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
      script.onload = () => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100
        });
        AOS.refresh();
      };
      document.body.appendChild(script);
    }, 100); // Delay sebentar agar DOM terlihat

    return;
  }

  progress += 5;
  bar.style.width = progress + '%';
}, 100);

// Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function () {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });

// JS Animasi Screen 
const { createApp } = Vue;

// App 1: Onboarding Screens
createApp({
  data() {
    return {
      screens: [
        "img/TB/Loading Screen1.png",
        "img/TB/Loading Screen2.png",
        "img/TB/Loading Screen3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-onboarding');

// App 2: Home & Explore Screens
createApp({
  data() {
    return {
      screens: [
        "img/TB/Home Screen1.png",
        "img/TB/Home Screen2.png",
        "img/TB/Home Screen3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-home');

// App 3: Education Screens
createApp({
  data() {
    return {
      screens: [
        "img/TB/Edu Screen1.png",
        "img/TB/Edu Screen2.png",
        "img/TB/Edu Screen3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-education');

// App 3: Education Screens
createApp({
  data() {
    return {
      screens: [
        "img/TB/Profile Screen1.png",
        "img/TB/Profile Screen2.png",
        "img/TB/Profile Screen3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-profile');

// Animasi PawPals
// App 1: Onboarding Screens
createApp({
  data() {
    return {
      screens: [
        "img/PP/Onboarding1.png",
        "img/PP/Onboarding2.png",
        "img/PP/Onboarding3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-onboarding-pp');

// App 2: Home Screens

createApp({
  data() {
    return {
      screens: [
        "img/PP/Home1.png",
        "img/PP/Home2.png",
        "img/PP/Home3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-home-pp');

// App 3: Community Screens

createApp({
  data() {
    return {
      screens: [
        "img/PP/Community1.png",
        "img/PP/Community2.png",
        "img/PP/Community3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-community-pp');

// App 4: Schedule & Profile Screens

createApp({
  data() {
    return {
      screens: [
        "img/PP/Schedule1.png",
        "img/PP/Schedule2.png",
        "img/PP/Schedule3.png",
      ],
      currentIndex: 0
    };
  },
  methods: {
    getPosition(index) {
      const len = this.screens.length;
      const center = this.currentIndex;
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
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }, 3000);
  }
}).mount('#app-schedule-pp');

// Animasi Scroll MK
// Dashboard
createApp({
    data() {
      return {
        scrollOffset: 0,
        direction: 1,
        pauseScroll: false,
        imageHeight: 0,
        containerHeight: 600,
        speed: 1, // pixel per step
      };
    },
    mounted() {
      const img = this.$refs.scrollImage;

      const updateImageHeight = () => {
        this.imageHeight = img.offsetHeight;
      };

      img.onload = updateImageHeight;

      if (img.complete) {
        updateImageHeight();
      }

      // Mulai scroll
      setInterval(() => {
        if (this.pauseScroll) return;

        const maxScroll = this.imageHeight - this.containerHeight;

        if (this.scrollOffset >= maxScroll) {
          this.direction = -1;
        } else if (this.scrollOffset <= 0) {
          this.direction = 1;
        }

        this.scrollOffset += this.speed * this.direction;
      }, 30);
    }
  }).mount('#app-dashboard-mk');

  // Dashboard
createApp({
    data() {
      return {
        scrollOffset: 0,
        direction: 1,
        pauseScroll: false,
        imageHeight: 0,
        containerHeight: 600,
        speed: 1, // pixel per step
      };
    },
    mounted() {
      const img = this.$refs.scrollImage;

      const updateImageHeight = () => {
        this.imageHeight = img.offsetHeight;
      };

      img.onload = updateImageHeight;

      if (img.complete) {
        updateImageHeight();
      }

      // Mulai scroll
      setInterval(() => {
        if (this.pauseScroll) return;

        const maxScroll = this.imageHeight - this.containerHeight;

        if (this.scrollOffset >= maxScroll) {
          this.direction = -1;
        } else if (this.scrollOffset <= 0) {
          this.direction = 1;
        }

        this.scrollOffset += this.speed * this.direction;
      }, 30);
    }
  }).mount('#app-search-mk');

    // Mentor
createApp({
    data() {
      return {
        scrollOffset: 0,
        direction: 1,
        pauseScroll: false,
        imageHeight: 0,
        containerHeight: 600,
        speed: 1, // pixel per step
      };
    },
    mounted() {
      const img = this.$refs.scrollImage;

      const updateImageHeight = () => {
        this.imageHeight = img.offsetHeight;
      };

      img.onload = updateImageHeight;

      if (img.complete) {
        updateImageHeight();
      }

      // Mulai scroll
      setInterval(() => {
        if (this.pauseScroll) return;

        const maxScroll = this.imageHeight - this.containerHeight;

        if (this.scrollOffset >= maxScroll) {
          this.direction = -1;
        } else if (this.scrollOffset <= 0) {
          this.direction = 1;
        }

        this.scrollOffset += this.speed * this.direction;
      }, 30);
    }
  }).mount('#app-mentor-mk');

    // Profile
createApp({
    data() {
      return {
        scrollOffset: 0,
        direction: 1,
        pauseScroll: false,
        imageHeight: 0,
        containerHeight: 600,
        speed: 1, // pixel per step
      };
    },
    mounted() {
      const img = this.$refs.scrollImage;

      const updateImageHeight = () => {
        this.imageHeight = img.offsetHeight;
      };

      img.onload = updateImageHeight;

      if (img.complete) {
        updateImageHeight();
      }

      // Mulai scroll
      setInterval(() => {
        if (this.pauseScroll) return;

        const maxScroll = this.imageHeight - this.containerHeight;

        if (this.scrollOffset >= maxScroll) {
          this.direction = -1;
        } else if (this.scrollOffset <= 0) {
          this.direction = 1;
        }

        this.scrollOffset += this.speed * this.direction;
      }, 30);
    }
  }).mount('#app-profile-mk');

    AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });