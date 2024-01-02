<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <div class="d-flex align-items-center pe-1">
          <img
            src="../public/pika-favicon.png"
            alt=""
            width="30"
            class="d-inline-block align-text-top"
          />
          <p class="m-0">❤</p>
          <img src="../public/favicon.ico" alt="" width="30" />
        </div>
        PokeApi - Practice
      </router-link>
      <div>
        <router-link to="/" class="btn btn-outline-primary me-2"
          >Home</router-link
        >
        <router-link to="/pokemons" class="btn btn-outline-primary me-2"
          >Pokemons</router-link
        >
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>
