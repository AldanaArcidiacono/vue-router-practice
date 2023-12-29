<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="title">
        <h1>Vue Practice</h1>
        <div class="pikaAndVue">
          <img src="../public/pika-favicon.png" alt="" width="40" />
          <p class="love">❤</p>
          <img src="../public/favicon.ico" alt="" width="40" />
        </div>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pokemons">Pokemons</RouterLink>
      </nav>
    </div>
  </header>

  <!-- Here the selected component will render -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.title {
  display: flex;
  justify-content: space-between;
}
.pikaAndVue {
  display: flex;
  align-items: center;
}

.love {
  padding-inline: 0.5rem;
  font-size: 1.5rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
