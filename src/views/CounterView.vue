<template>
  <h2>COUNTER!</h2>
  <h3>Simple Count: {{ useCounter.count }}</h3>
  <h3>Double Count: {{ useCounter.double }}</h3>
  <button class="btn btn-primary" @click="useCounter.increment">
    Increment
  </button>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";

const useCounter = useCounterStore();
</script>
