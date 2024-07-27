<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    <div class="flex flex-col items-center justify-center p-6">
      <!-- Car Image Section -->
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div class="flex justify-center mb-4">
          <img
            src="https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_640.jpg"
            alt="Car"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <h2 class="text-xl font-bold text-gray-900 mb-2 text-center">
          รถยนต์ของคุณ
        </h2>
        <p class="text-gray-700 text-center">
          กรุณาตรวจสอบข้อมูลรถยนต์ของคุณที่แสดงด้านล่างนี้.
        </p>
      </div>
    </div>
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
