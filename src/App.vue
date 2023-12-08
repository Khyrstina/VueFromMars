<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';


let showSearchDropdown = ref(false);
let showAboutDropdown = ref(false);

const toggleDropdown = (arg) => {
  if (arg === 'search') {
    showSearchDropdown.value = !showSearchDropdown.value;
  } else if (arg === 'about') {
    showAboutDropdown.value = !showAboutDropdown.value;
  }
};
</script>


<template> 

  <div class="wrapper">
    <header>
      <video poster="./assets/Perseverance.webp"  autoplay muted loop id="marsAnimation">
      <source src="./assets/RotatingMars.mp4" type="video/mp4">
    </video>
    <nav>
      <div class="navMenuItem"><RouterLink to="/">Home</RouterLink></div>
      <div class="navMenuItem">
        <a class="toggleForNav" style="text" @click="toggleDropdown('search')" v-bind:class="{ showSearchDropdown }">Search Rover Images</a>
        <div class="searchDropdown" v-show="showSearchDropdown">
            <RouterLink to="/perseverance">Perseverance</RouterLink>
            </div>
      </div>
      <div class="navMenuItem">
        <a class="toggleForNav" @click="toggleDropdown('about')" v-bind:class="{ showAboutDropdown }">Learn About A Rover</a>
        <div class="aboutDropdown" v-show="showAboutDropdown">
            <RouterLink to="/about">Perseverance</RouterLink>
            </div>
      </div>

<!--       <RouterLink to="/perseverance">Perseverance</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->
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
  z-index: 1;
}

nav a , nav a.visible, .searchDropdown a, .aboutDropdown a{
  color: var(--color-text);
  border: none;
  text-decoration: none;
  user-select: none;
}

nav a:hover, .aboutDropdown a:hover, .searchDropdown a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

nav a, .searchDropdown a, .aboutDropdown a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  background-color: transparent;
  cursor: pointer;
  user-select: none;
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
