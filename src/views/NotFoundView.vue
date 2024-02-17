<template>
  <div>
    <div class="alert alert-warning d-flex align-items-center" role="alert">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <p class="mb-0 ms-2">404 - Page not Found</p>
    </div>
    <button @click="back" class="btn btn-outline-primary me-2">
      Back to Home
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const back = () => {
  router.push('/');
};
</script>
