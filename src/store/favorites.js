import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([]);

  const addFav = (poke) => {
    favorites.value.push(poke);
  };

  const deleteFav = (id) => {
    favorites.value = favorites.value.filter((el) => el.id !== id);
  };

  const findPoke = (name) => favorites.value.find((item) => item.name === name);

  return {
    favorites,
    addFav,
    deleteFav,
    findPoke,
  };
});
