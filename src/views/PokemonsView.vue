<template>
  <h1>Pokemons!</h1>
  <div v-if="loading">Loading Pokemons...</div>

  <div class="alert alert-danger d-flex align-items-center" v-if="error">
    <i class="fa-solid fa-circle-exclamation"></i>
    <p class="mb-0 ms-2">{{ error }}</p>
  </div>

  <div v-if="data">
    <h3>Select a Pokemon:</h3>
    <ul class="list-group list-group-horizontal flex-wrap">
      <li
        class="list-group-item col-4"
        v-for="poke of data.results"
        :key="poke.name"
      >
        <router-link :to="`/pokemons/${poke.name}`">{{
          poke.name
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

onMounted(() => getData('https://pokeapi.co/api/v2/pokemon'));
</script>

<style>
.list-group-item {
  text-transform: capitalize;
}
</style>
