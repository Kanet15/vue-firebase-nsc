<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />

    <!-- Hero Section -->
    <section
      class="relative bg-cover bg-center h-screen flex items-center"
      style="
        background-image: url('https://www.cobrabusiness.com/wp-content/uploads/2022/05/Image-4-Updated-1.0.png');
      "
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative flex items-center justify-start px-12 py-6 w-full">
        <div class="text-white w-1/2">
          <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            ระบบตรวจสอบการเข้า-ออกรถยนต์
          </h1>
          <p class="text-lg md:text-xl mb-8">
            Transforming ideas into reality with innovative solutions.
          </p>
          <a
            href="#"
            class="bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              class="w-16 h-16 text-teal-500 mb-4 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm4 12H4v-6c0-1.1.9-2 2-2h2v-1.58A4.98 4.98 0 0 1 12 6c2.21 0 4 1.79 4 4v1.58h2c1.1 0 2 .9 2 2v6z"
              ></path>
            </svg>
            <h3 class="text-xl font-semibold mb-2">Feature 1</h3>
            <p class="text-gray-700">
              Our first feature provides comprehensive solutions for your needs.
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              class="w-16 h-16 text-teal-500 mb-4 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm4 12H4v-6c0-1.1.9-2 2-2h2v-1.58A4.98 4.98 0 0 1 12 6c2.21 0 4 1.79 4 4v1.58h2c1.1 0 2 .9 2 2v6z"
              ></path>
            </svg>
            <h3 class="text-xl font-semibold mb-2">Feature 2</h3>
            <p class="text-gray-700">
              Our second feature enhances your productivity and efficiency.
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              class="w-16 h-16 text-teal-500 mb-4 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm4 12H4v-6c0-1.1.9-2 2-2h2v-1.58A4.98 4.98 0 0 1 12 6c2.21 0 4 1.79 4 4v1.58h2c1.1 0 2 .9 2 2v6z"
              ></path>
            </svg>
            <h3 class="text-xl font-semibold mb-2">Feature 3</h3>
            <p class="text-gray-700">
              Our third feature offers seamless integration with other tools.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
/* Additional styling, if needed */
</style>
