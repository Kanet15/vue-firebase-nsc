<template>
  <div class="flex flex-col items-center">
    <video
      ref="video"
      autoplay
      playsinline
      webkit-playsinline
      muted
      hidden
      class="w-full max-w-xl"
    ></video>

    <canvas
      ref="canvas"
      width="1280"
      height="720"
      class="rounded-3xl bg-black mt-4 w-full max-w-xl"
    ></canvas>
    <div class="flex flex-wrap items-center justify-center py-4 gap-4">
      <button
        class="px-6 py-4 bg-green-500 rounded text-white text-xl md:text-2xl uppercase font-bold hover:bg-green-600"
        @click="takePicture"
      >
        บันทึกภาพ
      </button>
      <button
        class="px-6 py-4 bg-blue-500 rounded text-white text-xl md:text-2xl uppercase font-bold hover:bg-blue-600"
        @click="useFrontCamera"
      >
        กล้องหน้า
      </button>
      <button
        class="px-6 py-4 bg-blue-500 rounded text-white text-xl md:text-2xl uppercase font-bold hover:bg-blue-600"
        @click="useBackCamera"
      >
        กล้องหลัง
      </button>
      <button
        class="px-6 py-4 bg-red-500 rounded text-white text-xl md:text-2xl uppercase font-bold hover:bg-red-600"
        @click="toggleCamera"
      >
        {{ cameraOn ? "ปิดกล้อง" : "เปิดกล้อง" }}
      </button>
    </div>
    <div v-if="notification" class="notification">
      {{ notification }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../main.js";
import * as faceapi from "face-api.js";
import "@tensorflow/tfjs";

const canvas = ref(null);
const video = ref(null);
const ctx = ref(null);

const constraints = ref({
  audio: false,
  video: { facingMode: "environment" },
});

let currentCamera = "user";
const cameraOn = ref(true);
const notification = ref("");

// Initialize the canvas context
const initCanvasContext = () => {
  if (canvas.value) {
    ctx.value = canvas.value.getContext("2d");
  }
};

// Initialize the canvas drawing
const initDrawing = () => {
  if (ctx.value && video.value) {
    const draw = () => {
      ctx.value.drawImage(
        video.value,
        0,
        0,
        canvas.value.width,
        canvas.value.height
      );
      requestAnimationFrame(draw);
    };
    draw();
  }
};

async function loadFaceApiModels() {
  try {
    const modelUrl = "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl);
    await faceapi.nets.faceLandmark68Net.loadFromUri(modelUrl);
    await faceapi.nets.faceRecognitionNet.loadFromUri(modelUrl);
    console.log("Face API models loaded successfully");
  } catch (error) {
    console.error("Error loading Face API models:", error);
    notification.value = "ไม่สามารถโหลดโมเดลได้";
    setTimeout(() => {
      notification.value = "";
    }, 3000);
  }
}

// Function to take a picture
async function takePicture() {
  if (canvas.value) {
    const image = canvas.value.toDataURL("image/png");
    const detections = await faceapi
      .detectAllFaces(video.value, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();

    const faceDescriptors = detections.map((d) => d.descriptor);

    try {
      await addDoc(collection(firestore, "pictures"), {
        imageData: image,
        embeddings: faceDescriptors.map((descriptor) => Array.from(descriptor)),
        timestamp: new Date(),
      });
      notification.value = "บันทึกเรียบร้อย";
      setTimeout(() => {
        notification.value = "";
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      notification.value = "เกิดข้อผิดพลาดในการบันทึก";
      setTimeout(() => {
        notification.value = "";
      }, 3000);
    }
  }
}

// Function to switch to front camera
function useFrontCamera() {
  currentCamera = "user";
  constraints.value.video = { facingMode: currentCamera };
  console.log("สลับเป็นกล้องหน้า");
  setupCamera();
}

function useBackCamera() {
  currentCamera = "environment";
  constraints.value.video = { facingMode: currentCamera };
  console.log("สลับเป็นกล้องหลัง ");
  setupCamera();
}

// Function to toggle camera
function toggleCamera() {
  if (cameraOn.value) {
    if (video.value) {
      const stream = video.value.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop()); // Stop existing tracks
      }
      video.value.srcObject = null; // Clear srcObject
    }
    cameraOn.value = false;
  } else {
    cameraOn.value = true;
    setupCamera();
  }
}

// Function to set up camera
async function setupCamera() {
  try {
    await loadFaceApiModels();
    const stream = await navigator.mediaDevices.getUserMedia(constraints.value);
    if (video.value) {
      video.value.srcObject = stream;
      await new Promise((resolve, reject) => {
        video.value.onloadedmetadata = resolve;
        video.value.onerror = reject;
      });
      await video.value.play();
      initCanvasContext(); // Initialize canvas context
      initDrawing(); // Initialize drawing
    }
  } catch (error) {
    console.error("Error accessing media devices or playing video.", error);
    notification.value = "ไม่สามารถเข้าถึงกล้องได้";
    setTimeout(() => {
      notification.value = "";
    }, 3000);
  }
}

// Initialize camera on component mount
setupCamera();
</script>

<style>
.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 10; /* Ensure it's on top of other content */
}
</style>
