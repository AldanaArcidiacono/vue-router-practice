<template>
  <div>
    <div v-if="loading">Loading Pokemons...</div>
    <div v-if="data">
      <h2>Poke name: {{ uppercasePokeName }}</h2>
      <img
        :src="data?.sprites?.other.dream_world.front_default"
        :alt="uppercasePokeName"
        width="100"
      />
    </div>
    <div
      v-if="!loading && !data"
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
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

const route = useRoute();
const router = useRouter();

const { getData, data, loading } = useGetData();

const uppercasePokeName = computed(() => {
  const firstLetter = route.params.name.slice(0, 1).toUpperCase();
  const restText = route.params.name.slice(1);
  return firstLetter + restText;
});

const back = () => {
  router.push("/pokemons");
};

onMounted(() =>
  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
);
</script>
