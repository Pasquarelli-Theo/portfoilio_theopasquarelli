<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
    <h2 class="absolute right-0 mt-14 mr-36 font-aesthetic text-6xl text-white">PROJETS</h2>
    <div class="flex">
      <img src="../assets/skyP.png" class="mt-40 w-1/2" />
      <div class="mt-72">
        <RouterLink to="/sky" class=""
          ><p class="hover:text-grey2 font-aesthetic text-3xl text-white">SkyWalker</p>
          <p class="font-okine text-base font-light text-white">Site de sneakers personnalisables</p></RouterLink
        >
      </div>
    </div>

    <div class="flex text-right">
      <div class="mt-52 ml-96 pl-48">
        <RouterLink to="/sky" class=""
          ><p class="hover:text-grey2 font-aesthetic text-3xl text-white">13 BPM</p>
          <p class="font-okine text-base font-light text-white">Site d’un festival de musique rap</p></RouterLink
        >
      </div>
      <img src="../assets/13bpmP.png" class="mt-20 w-1/2 absolute right-0" />
    </div>

    <div class="flex">
      <img src="../assets/OsakaP.png" class="mt-40 ml-20 w-1/2" />
      <div class="mt-72 -ml-20">
        <RouterLink to="/sky" class=""
          ><p class="hover:text-grey2 font-aesthetic text-3xl text-white">OSAKA 2025</p>
          <p class="w-72 font-okine text-base font-light text-white">Affiche pour l’exposition universelle d’Osaka 2025</p></RouterLink
        >
      </div>
    </div>

    <div class="flex text-right">
      <div class="mt-52 ml-96 pl-48">
        <RouterLink to="/sky" class=""
          ><p class="hover:text-grey2 font-aesthetic text-3xl text-white">PETIT CORSAIRE</p>
          <p class="font-okine text-base font-light text-white">Illustration dans le style de Cassandre</p></RouterLink
        >
      </div>
      <img src="../assets/corsaireP.png" class="mt-20 w-1/2 absolute right-0" />
    </div>
  </main>
</template>
