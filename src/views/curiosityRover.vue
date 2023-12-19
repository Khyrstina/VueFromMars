<script setup>
import { ref, computed } from 'vue';

const earthDaysText = ref('');
const rangeInImagesText = ref('');
const date = ref(new Date());
const minDate = computed(() => new Date(2012, 7, 6)); // 08/06/2012 Curiosity Landing Date
const maxDate = computed(() => new Date()); // Today's date
const images = ref([]);
let pageNumber = 1;
let correctDate = '';
let displayDate = '';
let numPhotosTaken = 0;
let targetSol = 0;
let nextButtonCounter = 0;

const getCuriosityImages = async (date) => {
  const apiUrl = `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?earth_date=${date}&page=${pageNumber}`;
  const resp = await fetch(apiUrl);
  const data = await resp.json();
  console.log(apiUrl);
  console.log(data.photos);
  images.value = data.photos; // Update the images directly
};

const dateCorrection = (date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  correctDate = `${year}-${month}-${day}`;
  displayDate = `${month}/${day}/${year}`;
};

const getEarthDaysSinceLanding = async () => {
  console.log(targetSol);
  const apiUrl = `https://mars-photos.herokuapp.com/api/v1/manifests/curiosity`;
  const resp = await fetch(apiUrl);
  const data = await resp.json();
  const index = data.photo_manifest.photos.findIndex(item => item.sol === targetSol);

  if (index !== -1) {
    console.log('found index for sol');
    numPhotosTaken = data.photo_manifest.photos[index].total_photos;
    earthDaysText.value = `Curiosity took ${numPhotosTaken} photos on ${displayDate}.`;
    rangeInImagesText.value = `Showing images ${nextButtonCounter + 1 }-${nextButtonCounter + 26} of ${numPhotosTaken}.`;
    console.log(earthDaysText.value);
  } else {
    console.log('index not found');
    earthDaysText.value = `Curiosity  took 0 photos on ${displayDate}.`;
  }
};

const handleSearchImages = async () => {
  dateCorrection(date.value);
  await getCuriosityImages(correctDate);
  if (images.value && images.value.length > 0) {
    targetSol = images.value[0].sol;
    await getEarthDaysSinceLanding();
  } else {
    console.error('No images found.');
  }
};

const handleNextPage = () => {
  pageNumber++;
  handleSearchImages();
};

</script>

<template>
  <section class="curiosityWrapper">
    <div class="searchSection">
      <div id="datePickerWrapper">
        <vue-date-picker
          :min-date="minDate"
          :max-date="maxDate"
          dark
          teleport-center
          :hide-navigation="['time', 'minutes', 'hours', 'seconds']"
          id="datePicker"
          v-model="date"
        />
      </div>
      <button class="button-shadow-border button-shadow" @click="handleSearchImages">
        Search Images
      </button>
      <h2 v-if="earthDaysText" id="h2SearchInfoText"> {{ earthDaysText }}</h2>
      <h3 v-if="earthDaysText" id="rangeInImagesDisplayed"> {{ rangeInImagesText }}</h3>
      <div id="images">
        <img
          v-for="image in images"
          :key="image.id"
          :src="image.img_src"
          :title="'Taken on sol #' + image.sol"
          class="curiosityImage"
          alt="./assets/fourOhFour.png"
        />
      </div>
      <button
        class="button-shadow-border button-shadow"
        id="moreImages"
        @click="handleNextPage"
        v-if="images.length > 0"
      >
        More Images
      </button>
    </div>
  </section>
</template>

<style>
@import url(../assets/rover.css);
@import url(../assets/buttons.css);
</style>