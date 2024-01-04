<template>
  <h1>Pokemons!</h1>
  <div v-if="loading">Loading Pokemons...</div>
  <div v-if="data">
    <h3>Select a Pokemon:</h3>
    <ul>
      <li v-for="poke of data.results" :key="poke.name">
        <router-link :to="`/pokemons/${poke.name}`">{{
          uppercasePokeName(poke.name)
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { getData, data, loading } = useGetData();

const uppercasePokeName = (pokeName) => {
  const firstLetter = pokeName.slice(0, 1).toUpperCase();
  const restText = pokeName.slice(1);
  return firstLetter + restText;
};

onMounted(() => getData("https://pokeapi.co/api/v2/pokemon"));
</script>
