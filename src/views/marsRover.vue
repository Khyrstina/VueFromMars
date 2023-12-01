<script setup>
import { ref } from 'vue';

const date = ref();
const images = ref([]);
let pageNumber = 1;
let correctDate = '';

async function getPerserveranceImages(date) {
  const apiUrl = `https://mars-photos.herokuapp.com/api/v1/rovers/Perseverance/photos?earth_date=${date}&page=${pageNumber}`;
  let resp = await fetch(apiUrl);
  let data = await resp.json();
  console.log(apiUrl);
  console.log(data.photos);
  if (data.photos.length === 0) {
    document.getElementById('moreImages').style.display = 'none';
    document.getElementById('noImgsMessage').style.display = 'block';
  }
  images.value = data.photos;
}

function dateCorrection(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const correctedDate = `${year}-${month}-${day}`;
  correctDate = correctedDate;
  getPerserveranceImages(correctDate);
}

function handleSearchImages() {
  dateCorrection(date.value);
}

function handleNextPage() {
  pageNumber++;
  getPerserveranceImages(correctDate);
}

</script>

<template main>

  <section class="perseveranceWrapper">
<div class="searchSection">
  <div id="datePickerWrapper">
  <vue-date-picker dark teleport-center :hide-navigation="['time', 'minutes', 'hours', 'seconds']" id="datePicker" v-model="date" />
</div>
  <button class="button-shadow-border button-shadow" @click="handleSearchImages">Search Images</button>
  <div id="images">
    <img v-for="image in images" :key="image.id" :src="image.img_src" :title="'Taken on sol #' + image.sol" class="perseveranceImage" />
  </div>
  <button class="button-shadow-border button-shadow" id="moreImages" @click="handleNextPage" v-if="images.length > 0">More Images</button>
  <p id="noImgsMessage" display="hidden">No more images to display! Try another date.</p>
</div>
</section>

</template>

<style>
.App-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.perseveranceWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  padding: 0.5rem;
  z-index: 0;
}

div.searchSection{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
}

div#images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
}

#images img {
  max-width: 90%;
  border-radius: 10px;
  margin-bottom: 2rem;
}

#datePicker {
  display: flex;
  justify-content: center;
}

.button-shadow {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 15px;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 5px;
  transition: all 0.3s ease-in-out 0s;
  left: 0px;
  top: 0px;
  width: 180px;
  color: #e1f3f8;
  background: #5b616b;
}



.button-shadow:hover {
  left: 4px;
  top: 4px;
  background: whitesmoke;
  color: #0b3d91;
  box-shadow: #dd361c 0px 0px 0px 0px;
}

.button-shadow-border {
  border: 1px solid #c62d1f;
  box-shadow: #c62d1f 4px 4px 0px 0px;
}



</style>