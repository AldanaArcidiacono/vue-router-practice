<template>
  <h2>COUNTER!</h2>
  <h3>Simple Count: {{ count }}</h3>
  <h3>Double Count: {{ double }}</h3>
  <button class="btn btn-primary" @click="increment">Increment</button>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();
const { increment } = useCounter;
const { count, double } = storeToRefs(useCounter);
</script>
