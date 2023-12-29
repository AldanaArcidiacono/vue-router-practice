<template>
  <h1>Pokemons</h1>
  <ul>
    <li v-for="poke of pokemons">
      {{ poke.name }}
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const pokemons = ref([]);

const getData = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    pokemons.value = data.results;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => getData());
</script>
