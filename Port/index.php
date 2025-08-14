<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css">
    <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css">
    <title>Sora | MyPorto</title>
</head>
<body style="font-family: 'Poppins', sans-serif;">

  <!-- Navbar -->
  <nav class="fixed top-0 w-full z-50 bg-white shadow-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-bold text-[#5E3BEE]">MyPorto</span>
        </div>

        <!-- Navigation Links (Hidden on mobile) -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="index.php" class="text-gray-700 hover:text-purple-600">Home</a>
          <a href="port.php" class="text-gray-700 hover:text-purple-600">Portofolio</a>
          <a href="#" class="text-gray-700 hover:text-purple-600">About Me</a>
        </div>

        <!-- Contact Button -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="index.php" class="border border-[#5E3BEE] text-[#5E3BEE] px-4 py-2 rounded-md hover:bg-[#452fc5] hover:text-white transition">
            Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button id="mobile-menu-button" class="text-gray-700 focus:outline-none text-2xl">
            ☰
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden px-4 pb-4">
      <a href="index.php" class="block py-2 text-gray-700 hover:text-purple-600">Home</a>
      <a href="port.php" class="block py-2 text-gray-700 hover:text-purple-600">Portofolio</a>
      <a href="#" class="block py-2 text-gray-700 hover:text-purple-600">About Me</a>
      <a href="index.php" class="block py-2 bg-[#5E3BEE] text-white rounded-md text-center hover:bg-[#452fc5] transition">Contact</a>
    </div>
  </nav>
  <div class="h-15 bg-gradient-to-b from-gray-200 to-transparent"></div>

  <!-- Hero Section -->
  <div class="min-h-[500px] w-full bg-[#F5FCFF] flex flex-col md:flex-row items-center justify-center gap-6 p-6">
    
    <!-- Text -->
    <div class="w-full md:w-1/3 flex flex-col items-start justify-center gap-4">
      <h3 class="text-gray-600 mt-2">Hey, I am Sora</h3>
      <h2 class="text-gray-800 text-4xl md:text-5xl font-bold leading-tight">
        A Fresh Graduate <span class="text-[#5E3BEE]">Informatics</span> Student
      </h2>
      <p class="text-gray-600 mt-2">
        Eager to apply the knowledge and skills I’ve acquired during my studies to real-world software development projects, while continuously learning, improving, and contributing to impactful solutions in a collaborative environment.
      </p>
      <a href="contact.php" class="block px-4 py-2 bg-[#5E3BEE] text-white rounded-md text-center hover:bg-white hover:text-[#5E3BEE] hover:border border-[#5E3BEE] texttransition">Get in Touch</a>
    </div>

    <!-- Image -->
    <div class="w-full md:w-1/2 flex items-center justify-center">
      <img class="max-w-full h-auto rounded-lg" src="FotoOrang.png" alt="foto">
    </div>

  </div>

    <!-- Hero Section 2 -->

    <!-- Title -->
  <div class="w-full flex flex-col items-start justify-center gap-10 pl-[200px] pt-10">
    <h2 class="text-gray-800 text-4xl md:text-5xl font-semibold leading-tight text-center">
      My Skills
    </h2>
  </div>

<div class="min-h-[100px] w-full flex flex-col items-center justify-center gap-10 px-6 py-10 bg-white">
  
  <!-- Grid Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20  ">
    
        <!-- Android Programming -->
        <div class="bg-[#f5faff] min-h-[200px] w-[300px] rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-start justify-center text-center">
        <!-- Ikon Android dengan Ficon -->
            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-[#e0f2fe] mb-3">
            <i class="fi fi-brands-android text-2xl text-[#5E3BEE]"></i>
            </div>
        <h3 class="text-lg font-semibold text-[#5E3BEE]">Android Programming</h3>
        <h4 class="text-sm">Jetpack Compose</h4>
        </div>

        <!-- Web Programming -->
        <div class="bg-[#f5faff] min-h-[200px] w-[300px]  rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-start justify-center text-center">
        <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-[#e0f2fe] mb-3">
            <i class="fi fi-sr-laptop-code text-2xl text-[#5E3BEE]"></i>
            </div>
        <h3 class="text-lg font-semibold text-[#5E3BEE]">Web Programming</h3>
        <h4 class="text-sm">HTML, CSS, PHP, MySQL</h4>
        </div>

        <!-- UI/UX -->
        <div class="bg-[#f5faff] min-h-[200px] w-[300px]  rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-start justify-center text-center">
        <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-[#e0f2fe] mb-3">
            <i class="fi fi-sr-pencil-ruler text-2xl text-[#5E3BEE]"></i>
            </div>
        <h3 class="text-lg font-semibold text-[#5E3BEE]">UI/UX Design</h3>
        <h4 class="text-sm">Figma</h4>
        </div>

        <!-- Others -->
        <div class="bg-[#f5faff] min-h-[200px] w-[300px]  rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-start justify-center text-center">
        <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-[#e0f2fe] mb-3">
            <i class="fi fi-sr-file-code text-2xl text-[#5E3BEE]"></i>
            </div>
        <h3 class="text-lg font-semibold text-[#5E3BEE]">Others</h3>
        <h4 class="text-sm">Matlab, R Studio</h4>
        </div>

    </div>
</div>

    <!-- Hero Section -->
    <div class="min-h-[500px] w-full flex flex-col md:flex-row items-center justify-center gap-6 p-6">
    
     <!-- Image -->
    <div class="w-full md:w-1/2 flex items-center justify-center">
      <img class="max-w-1/2 h-1/2 rounded-lg" src="AboutMe.png" alt="fotoAboutMe">
    </div>

    <!-- Text -->
    <div class="w-full md:w-1/3 flex flex-col items-start justify-center gap-4">
      
      <h2 class="text-gray-800 text-4xl md:text-5xl font-semibold leading-tight">
        About Me
      </h2>
      <p class="text-gray-600 mt-2">
         A student at Universitas Pembangunan Vataran Yogyakarta, actively involved in the IT Club under the UI/UX division. Interested in applying the knowledge and skills gained throughout academic studies
      </p>
      <a href="contact.php" class="block px-4 py-2 border border-[#5E3BEE] text-[#5E3BEE] rounded-md text-center hover:bg-[#452fc5] hover:text-white transition">More About Me</a>
    </div>

   

  </div>

  <script>
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function () {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });
  </script>

</body>
</html>
