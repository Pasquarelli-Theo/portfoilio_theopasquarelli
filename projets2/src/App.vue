<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-white">
    <RouterLink to="/home"><img src="@/assets/logoNoir.svg" class="w-36 mt-5 ml-5" /></RouterLink>
  </header>
  <Suspense>
    <router-view />
  </Suspense>
  <footer class="bg-black text-white">
    <br />
    <div class="grid grid-flow-row-dense grid-cols-2">
      <img src="@/assets/logoBlanc.svg" class="m-8 w-36 bg-black" />
      <div class="-ml-96 mt-10">
        <p class="-ml-36 font-okine text-xs">+33(0)6 62 92 47 75</p>
        <a href="mailto:theopasquarelli68@gmail.com" class="-ml-36 font-okine text-xs">theopasquarelli68@gmail.com</a>
      </div>
    </div>

    <div class="absolute right-0 -mt-28 mr-28 flex bg-black">
      <img src="@/assets/instagram.png" class="w-12" />
      <img src="@/assets/linkedin.png" class="w-12" />
    </div>
    <div class="absolute right-0 -mt-16 mr-28 text-xs"><RouterLink to="/mentions">Mentions légales</RouterLink></div>
  </footer>
</template>

<script></script>
