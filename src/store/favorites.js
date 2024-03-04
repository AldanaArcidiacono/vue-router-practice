import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([]);

  if (localStorage.getItem('fav'))
    favorites.value = JSON.parse(localStorage.getItem('fav'));

  const addFav = (poke) => {
    favorites.value.push(poke);
    localStorage.setItem('fav', JSON.stringify(favorites.value));
  };

  const deleteFav = (id) => {
    favorites.value = favorites.value.filter((el) => el.id !== id);
    localStorage.setItem('fav', JSON.stringify(favorites.value));
  };

  const findPoke = (name) => favorites.value.find((item) => item.name === name);

  return {
    favorites,
    addFav,
    deleteFav,
    findPoke,
  };
});
