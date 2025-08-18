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
        "img/TB/Loading Screen.png",
        "img/TB/Loading Screen2.png",
        "img/TB/Loading Screen5.png",
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