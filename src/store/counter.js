import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // Reactive data
  const count = ref(0);

  // Methods
  const increment = () => count.value++;

  // Computed
  const double = computed(() => count.value * 2);

  return {
    count,
    increment,
    double,
  };
});
