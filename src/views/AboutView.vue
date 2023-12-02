<script setup>
import { ref, onMounted } from 'vue';

let landingDate = ref("");
let launchDate = ref("");
let status = ref("");
let currentSol = ref("");
let recentDate = ref("");
let totalPhotos = ref("");

async function getPerserveranceInfo() {
  const apiUrl = `https://mars-photos.herokuapp.com/api/v1/manifests/Perseverance`;
  let resp = await fetch(apiUrl);
  let data = await resp.json();
  console.log(apiUrl);

  landingDate.value = data.photo_manifest.landing_date;
  launchDate.value = data.photo_manifest.launch_date;
  status.value = data.photo_manifest.status;
  currentSol.value = data.photo_manifest.max_sol;
  recentDate.value = data.photo_manifest.max_date;
  totalPhotos.value = data.photo_manifest.total_photos;
  console.log(landingDate.value);
  console.log(launchDate.value);
  console.log(status.value);
}

onMounted(async () => {
  await getPerserveranceInfo();
});
</script>

<template main>
  <div class="about">
    <h1>About Perseverance</h1>
    <p>Perseverance is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA's Mars 2020 mission.
       It was manufactured by the Jet Propulsion Laboratory and launched on 30 July 2020, at 11:50 UTC. 
       Confirmation that the rover successfully landed on Mars was received on 18 February 2021 at 20:55 UTC.
        The rover's goals include identifying past environments capable of supporting microbial life,
         seeking out biosignatures of such life, and collecting rock and soil samples that could be returned to Earth by a future NASA mission.</p>
    
         <iframe id="perseverance3D" src="https://mars.nasa.gov/gltf_embed/25042" width="100%" height="650px" scrolling="noscroll" frameborder="0" allowfullscreen />
    
         <div id="perseveranceBox">
      <h2>Stats for this Rover:</h2>
      <table id="roverTable">
        <tr>
          <th>Stats:</th>
          <th>Perseverance:</th>
        </tr>
        <tr>
          <td>Landing Date:</td>
          <td>{{ landingDate }}</td>
        </tr>
        <tr>
          <td>Launch Date:</td>
          <td>{{ launchDate }}</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td>{{ status }}</td>
        </tr>
        <tr>
          <td>Current Sol:</td>
          <td>{{ currentSol }}</td>
        </tr>
        <tr>
          <td>Last Activity Date:</td>
          <td>{{ recentDate }}</td>
        </tr>
        <tr>
          <td>Total Photos:</td>
          <td>{{ totalPhotos }}</td>
        </tr>
      </table>
        </div>
  </div>
</template>

<style>
.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  margin: 1rem;
  background-image: url(../assets/starryOverlay.png);
  background-size: 3rem 3rem;
}

.about > * {
  margin: 1rem;
}

#perseveranceBox {
 display: flex;
 flex-direction: column;
 justify-content: center;
 flex-wrap: wrap; 
 margin: 1rem 0;
 background: rgba( 232, 189, 183, 0.2 );
 border: 1px solid rgba( 255, 255, 255, 0.8);
 box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
 backdrop-filter: blur( 1.5px );
 -webkit-backdrop-filter: blur( 1.5px );
 border-radius: 10px;
 text-align: left;
 padding: 1rem;
 width: 90%;
}

#perseveranceBox h2, #perseveranceBox table > tr > th {
  text-align: center;
}

#perseverance3D {
  width: 100%;
  height: 450px;
  border-radius: 10px;
}
#roverTable  {
  align-items: flex-start;
  border: 1px solid rgba( 232, 189, 183, 0.8 );
}

#roverTable th {
  font-weight: bold;
}

#roverTable th, #roverTable td, #roverTable tr, #roverTable {
  border: 1px solid rgba( 232, 189, 183, 0.8 );
  padding: 1rem;
}

#perseveranceStats {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
