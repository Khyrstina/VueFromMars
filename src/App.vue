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
            <RouterLink to="/curiosity">Curiosity</RouterLink>
            </div>
      </div>
      <div class="navMenuItem">
        <a class="toggleForNav" @click="toggleDropdown('about')" v-bind:class="{ showAboutDropdown }">Learn More</a>
        <div class="aboutDropdown" v-show="showAboutDropdown">
            <RouterLink to="/about-Perseverance">About Perseverance</RouterLink>
            <RouterLink to="/about-Curiosity">About Curiosity</RouterLink>
            <RouterLink to="/news">About NASA News</RouterLink>
            </div>
      </div>
    </nav>
    <h1 id="titleString">Vue From Mars</h1>
  </header>

  </div>
  <div class="sectionView">
  <RouterView />
</div>

</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
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
  align-self: center;
}

#titleString {
  position: absolute;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  z-index: 1;
  text-align: center;
  top: 18%;
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

.searchDropdown, .aboutDropdown {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  border: none;
  min-width: 10rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 2;
  text-align: center;
  border-radius: 10px;
  padding: 0.5rem;
}

nav a:hover, .aboutDropdown a:hover, .searchDropdown a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  border-left: none;
}

nav a, .searchDropdown a, .aboutDropdown a {
  display: inline-block;
  padding: 0 1rem;
  border-left: none;
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
