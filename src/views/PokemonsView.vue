<template>
  <h1>Select a Pokemon:</h1>
  <ul>
    <li v-for="poke of pokemons" :key="poke.name">
      <router-link :to="`/pokemons/${poke.name}`">{{
        uppercasePokeName(poke.name)
      }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const pokemons = ref([]);

const getData = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    pokemons.value = data.results;
  } catch (error) {
    console.log(error);
  }
};

const uppercasePokeName = (pokeName) => {
  const firstLetter = pokeName.slice(0, 1).toUpperCase();
  const restText = pokeName.slice(1);
  return firstLetter + restText;
};

onMounted(() => getData());
</script>
