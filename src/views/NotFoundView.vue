<template>
  <div>
    <h1>404 Page not Found</h1>
    <button @click="back" class="btn btn-outline-primary me-2">
      Back to Home
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const back = () => {
  router.push("/");
};
</script>
