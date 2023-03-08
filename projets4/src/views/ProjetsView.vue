<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
    <h2 class="absolute right-0 mt-14 mr-36 font-aesthetic text-6xl text-white">PROJETS</h2>
    <br />
    <div class="absolute z-20 flex">
      <img src="../assets/skyP.png" class="mt-40 w-1/2" />
      <div class="mt-72">
        <RouterLink to="/sky" class=""
          ><p class="font-aesthetic text-3xl text-white hover:text-grey2">SkyWalker</p>
          <p class="font-okine text-base font-light text-white">Site de sneakers personnalisables</p></RouterLink
        >
      </div>
    </div>

    <div class="z-0 mt-80"><img src="../assets/Croix2.png" class="" /></div>

    <div class="absolute z-20 -mt-44 mr-36 -ml-10 flex">
      <div class="ml-96 mt-24 pl-32 text-right">
        <RouterLink to="/sky" class=""
          ><p class="font-aesthetic text-3xl text-white hover:text-grey2">13 BPM</p>
          <p class="w-64 font-okine text-base font-light text-white">Site d’un festival de musique rap</p></RouterLink
        >
      </div>
      <img src="../assets/13bpmP.png" class="right-0 w-1/2" />
    </div>

    <div class="flex mb-96 absolute z-20">
      <img src="../assets/OsakaP.png" class="mt-40 ml-20 w-1/2" />
      <div class="mt-72 -ml-20">
        <RouterLink to="/sky" class=""
          ><p class="font-aesthetic text-3xl text-white hover:text-grey2">OSAKA 2025</p>
          <p class="w-72 font-okine text-base font-light text-white">Affiche pour l’exposition universelle d’Osaka 2025</p></RouterLink
        >
      </div>
    </div>

    <div class="absolute right-0 z-0 pt-52 mt-96"><img src="../assets/Croix2.png" class="-mt-52" /></div>

    <div class="absolute z-20 flex text-right mt-96 pt-24">
      <div class="mt-52 ml-96 ">
        <RouterLink to="/sky" class=""
          ><p class="font-aesthetic text-3xl w-96 text-white hover:text-grey2">PETIT CORSAIRE</p>
          <p class="font-okine text-base font-light text-white">Illustration dans le style de Cassandre</p></RouterLink
        >
      </div>
      <img src="../assets/corsaireP.png" class="right-0 mt-20 w-1/2" />
    </div>
    <div class="mb-96"><br></div><br>
    <div class="mb-96"><br></div><br>
    <br><br>
  </main>
</template>
