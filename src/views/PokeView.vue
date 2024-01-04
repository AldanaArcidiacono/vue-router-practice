<template>
  <div>
    <h2>Poke name: {{ uppercasePokeName }}</h2>
    <img :src="pokeImg" :alt="uppercasePokeName" width="100" />
    <button @click="back">Back to Pokemons</button>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const poke = ref({});
const pokeImg = ref("");

const uppercasePokeName = computed(() => {
  const firstLetter = route.params.name.slice(0, 1).toUpperCase();
  const restText = route.params.name.slice(1);
  return firstLetter + restText;
});

const getPokeData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    console.log(data);
    poke.value = data;
    pokeImg.value = data.sprites.other.dream_world.front_default;
  } catch (error) {
    console.log(error);
  }
};

const back = () => {
  router.push("/pokemons");
};

onMounted(() => getPokeData());
</script>
