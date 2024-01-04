<template>
  <div>
    <div v-if="poke">
      <h2>Poke name: {{ uppercasePokeName }}</h2>
      <img :src="pokeImg" :alt="uppercasePokeName" width="100" />
    </div>
    <div
      v-else
      class="alert alert-warning d-flex align-items-center"
      role="alert"
    >
      <i class="fa-solid fa-triangle-exclamation"></i>
      <p class="mb-0 ms-2">The requested pokemon does not exist.</p>
    </div>
    <button @click="back" class="btn btn-outline-primary mt-2">
      Back to Pokemons
    </button>
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
    poke.value = data;
    pokeImg.value = data.sprites.other.dream_world.front_default;
  } catch (error) {
    poke.value = null;
    console.log(error);
  }
};

const back = () => {
  router.push("/pokemons");
};

onMounted(() => getPokeData());
</script>
