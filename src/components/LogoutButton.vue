<!-- src/components/LogoutButton.vue -->
<template>
  <button @click="logout">ออกจากระบบ</button>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "LogoutButton",
  methods: {
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        router.push("/login");
        console.log("User signed out successfully");
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    },
  },
};
</script>
