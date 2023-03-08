<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
    <h2 class="absolute right-0 mt-14 mr-36 font-aesthetic text-6xl text-white">PROJETS</h2>
    <div class="flex">
      <img src="../assets/skyP.png" class="mt-40 w-1/2" />
      <div class="mt-72 hover:text-black">
        <RouterLink to="/sky" class=""
          ><p class="font-aesthetic text-white">SkyWalker</p>
          <p class="font-okine font-light text-white">Site de sneakers personnalisables</p></RouterLink
        >
      </div>
    </div>

    <div class="flex">
      <img src="../assets/OsakaP.png" class="mt-40 ml-20 w-1/2" />
      <div class="mt-72 -ml-20 hover:text-black">
        <RouterLink to="/sky" class=""
          ><p class="font-aesthetic text-white">Osaka 2025</p>
          <p class="w-72 font-okine font-light text-white">Affiche pour l’exposition universelle d’Osaka 2025</p></RouterLink
        >
      </div>
    </div>
  </main>
</template>
