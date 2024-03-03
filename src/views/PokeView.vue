<template>
  <div>
    <div v-if="loading">Loading Pokemon...</div>

    <div class="alert alert-danger d-flex align-items-center" v-if="error">
      <i class="fa-solid fa-circle-exclamation"></i>
      <p class="mb-0 ms-2">That Pokemon does not exist!</p>
    </div>

    <div v-if="data" class="d-flex align-items-center">
      <div class="card p-3">
        <div class="d-flex flex-column align-items-center">
          <img
            class="card-img-top"
            :src="data?.sprites?.other.dream_world.front_default"
            :alt="uppercasePokeName"
          />
          <div class="card-body">
            <h4 class="card-title">{{ uppercasePokeName }}</h4>
            <p class="card-text">Height: {{ data.height }}</p>
            <p class="card-text">Weight: {{ data.weight }}</p>
            <p class="card-text">Base experience: {{ data.base_experience }}</p>
            <p class="card-text">Moves: {{ data.moves.length }}</p>
            <button class="btn btn-primary mt-3">❤</button>
          </div>
        </div>
      </div>
    </div>

    <button @click="back" class="btn btn-outline-primary mt-2">
      Back to Pokemons
    </button>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';

const route = useRoute();
const router = useRouter();

const { getData, data, loading, error } = useGetData();

const uppercasePokeName = computed(() => {
  const firstLetter = route.params.name.slice(0, 1).toUpperCase();
  const restText = route.params.name.slice(1);
  return firstLetter + restText;
});

const back = () => {
  router.push('/pokemons');
};

onMounted(() =>
  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
);
</script>

<style>
.card-img-top {
  width: 60%;
}
</style>
