<script setup>
import { ref, onMounted } from 'vue';

let landingDate = ref("");
let launchDate = ref("");
let status = ref("");
let currentSol = ref("");
let recentDate = ref("");
let totalPhotos = ref("");

async function getCuriosityInfo() {
  const apiUrl = `https://mars-photos.herokuapp.com/api/v1/manifests/curiosity`;
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
  await getCuriosityInfo();
});
</script>

<template >
  <div class="about">
    <h1>About Curiosity</h1>
    <p>The Curiosity Rover, NASA's intrepid explorer on the Martian surface, stands as a testament to human ingenuity and curiosity. 
        Launched in 2011, this car-sized robotic geologist was designed for a two-year mission to investigate Mars' Gale Crater. 
        However, its tenacity and durability have defied expectations, as it continues to roam the Red Planet's rugged terrain, uncovering mysteries and sending back invaluable data. </p>
        <p>Armed with a sophisticated suite of instruments, including a laser that can vaporize rocks and analyze their composition, 
        Curiosity has made groundbreaking discoveries, such as evidence of ancient water flow and the building blocks of life. 
        Beyond its scientific triumphs, the rover has captured the world's imagination, transforming the quest for knowledge into a shared human journey, 
        where every new image or finding sparks collective wonder and awe. Curiosity embodies the indomitable spirit of exploration, 
        pushing the boundaries of what we know about the universe beyond our own blue planet.
    </p>
    
         <iframe id="curiosity3D" src="https://mars.nasa.gov/gltf_embed/24584" width="100%" height="650px" scrolling="no-scroll" frameborder="0" allowfullscreen />
    
         <div id="curiosityBox">
      <h2>Stats for this Rover:</h2>
      <table id="roverTable">
        <tr>
          <th>Stats:</th>
          <th>Curiosity:</th>
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
  background-color: #000609;
}

.about > * {
  margin: 1rem;
}

#curiosityBox {
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

#curiosityBox h2, #curiosityBox table > tr > th {
  text-align: center;
}

#curiosity3D {
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

/*#curiosityStats {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}*/

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
