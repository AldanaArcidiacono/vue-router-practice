<template>
  <h1>Pokemons!</h1>
  <div v-if="loading">Loading Pokemons...</div>

  <div class="alert alert-danger d-flex align-items-center" v-if="error">
    <i class="fa-solid fa-circle-exclamation"></i>
    <p class="mb-0 ms-2">{{ error }}</p>
  </div>

  <div v-if="data">
    <h3>Select a Pokemon:</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="poke of data.results" :key="poke.name">
        <router-link :to="`/pokemons/${poke.name}`">{{
          uppercasePokeName(poke.name)
        }}</router-link>
      </li>
    </ul>
    <div class="my-3">
      <button
        :disabled="!data.previous"
        class="btn btn-warning me-2"
        @click="getData(data.previous)"
      >
        Previous
      </button>
      <button
        :disabled="!data.next"
        class="btn btn-danger"
        @click="getData(data.next)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData';

const { getData, data, loading, error } = useGetData();

const uppercasePokeName = (pokeName) => {
  const firstLetter = pokeName.slice(0, 1).toUpperCase();
  const restText = pokeName.slice(1);
  return firstLetter + restText;
};

onMounted(() => getData('https://pokeapi.co/api/v2/pokemon'));
</script>
