<template>
  <h1>Favorites:</h1>
  <div class="d-flex flex-row flex-wrap justify-content-center">
    <div class="alert alert-primary" v-if="favorites.length === 0">
      You don't have favorites Pokes yet!
    </div>
    <div
      v-else
      v-for="fav of favorites"
      :key="fav.id"
      class="d-flex flex-column align-items-center m-3"
    >
      <div class="card p-3">
        <div class="d-flex flex-column align-items-center">
          <img
            class="card-img-top"
            :src="fav?.sprites?.other.dream_world.front_default"
            :alt="fav.name"
          />
          <div class="card-body">
            <h4 class="card-title">{{ fav.name }}</h4>
            <button @click="deleteFav(fav.id)" class="btn btn-danger mt-3">
              💔
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '@/store/favorites';

const useFavorites = useFavoritesStore();

const { deleteFav } = useFavorites;
const { favorites } = storeToRefs(useFavorites);
</script>

<style>
.card.p-3 {
  max-width: 250px;
}
.card-img-top {
  width: 50%;
}
.card-title {
  text-transform: capitalize;
}
</style>
