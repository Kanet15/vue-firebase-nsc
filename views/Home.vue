<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />
    <div class="flex items-center justify-center">
      <Camera />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "../src/components/Navbar.vue";
import Camera from "../src/components/Camera.vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<style>
body {
  font-family: "Arial", sans-serif;
}
/* ทำให้แน่ใจว่าภาพเต็มกรอบและรักษาสัดส่วนภาพ */
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
/* ปรับขนาดและสไตล์ของข้อความ */
h2 {
  font-size: 2rem; /* ขนาดข้อความสำหรับมือถือ */
}

h3 {
  font-size: 1.5rem; /* ขนาดข้อความชื่อผู้พัฒนา */
}

p {
  font-size: 1rem; /* ขนาดข้อความตำแหน่ง */
}
</style>
