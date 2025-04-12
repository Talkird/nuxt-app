<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import Button from "@/components/ui/Button.vue";

const userStore = useUserStore();

const handleLogin = () => {
  userStore.registerUser("testuser1", "testemail1@gmail.com", "testpassword1");
};
</script>

<template>
  <div class="h-screen">
    <Button @click="handleLogin">Register Test</Button>
  </div>
</template>
