<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import SupportIcon from "./icons/IconSupport.vue";
import AIcon from "./icons/IconA.vue";
import GameIcon from "./icons/IconGameConsole.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon> <AIcon /> <SupportIcon /> </template>
    <template #heading>Aldana's Project</template>

    <p>
      This is a practice of Vue3 with the CompositionAPI and the script-setup
      syntax. <br />
      Mostly, the practice is about router-vue and using axios with the
      <a href="https://pokeapi.co/" target="_blank" rel="noopener">PokeApi.</a
      ><br />
      Following the practices of the course
      <a
        href="https://www.udemy.com/share/101qKY3@EfERCrUilaaoRACp7k-t4zvhbYZPU_8BjMKCZ0p4oBn8LEFa0ucUTPQzdBChd3difQ==/"
        target="_blank"
        rel="noopener"
        >Vue js 3 [Actualizado] Desde cero + Vite + Firebase 9 + MEVN</a
      >
      given by bluuweb.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon> <GameIcon /> </template>
    <template #heading>Poke API</template>

    <p>
      This project will show Pokemons and their details. To see them, go to the
      page Pokemons :D
    </p>
  </WelcomeItem>
</template>
