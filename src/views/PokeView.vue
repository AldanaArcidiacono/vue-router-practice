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
            :alt="data.name"
          />
          <div class="card-body">
            <h4 class="card-title">{{ data.name }}</h4>
            <p class="card-text">Height: {{ data.height }}</p>
            <p class="card-text">Weight: {{ data.weight }}</p>
            <p class="card-text">Base experience: {{ data.base_experience }}</p>
            <p class="card-text">Moves: {{ data.moves.length }}</p>
            <button
              @click="addFav(data)"
              :disabled="findPoke(data.name)"
              class="btn btn-primary mt-3"
            >
              ❤
            </button>
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
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import { useFavoritesStore } from '@/store/favorites';

const route = useRoute();
const router = useRouter();

const { getData, data, loading, error } = useGetData();

const useFavorites = useFavoritesStore();

const { addFav, findPoke } = useFavorites;

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
.card-title {
  text-transform: capitalize;
}
</style>
