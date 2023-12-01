<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template> 

  <div class="wrapper">
    <header>
    <video poster="./assets/Perseverance.webp" autoplay muted loop id="marsAnimation">
      <source src="./assets/marsMaven.mp4" type="video/mp4">
    </video>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/perseverance">Perseverance</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <h1 id="titleString">Vue From Mars</h1>
  </header>

  </div>
  <div class="sectionView">
  <RouterView />
</div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav {
  display:flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}

#titleString {
  position: absolute;
  top: 20%;
  font-size: 3.5rem;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  z-index: 1;
  text-align: center;
}

#marsAnimation {
  position: relative;
  max-width: 100%;
  height: auto;
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

.sectionView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
}
  

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

</style>
