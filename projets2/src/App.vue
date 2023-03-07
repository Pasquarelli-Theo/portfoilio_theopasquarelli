<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-white">
    <RouterLink to="/home"><img src="@/assets/logoNoir.svg" class="mt-5 ml-5 w-36" /></RouterLink>

    <div class="fixed top-0 left-0 z-50 hidden h-screen w-full" id="menu">
      <div class="flex h-full w-full flex-col items-center justify-center bg-light_grey2">
        <a href="#" class="mb-4 text-2xl font-bold text-gray-800">Menu</a>
        <nav>
          <a href="#" class="block ml-36 py-2.5 px-4 font-aesthetic text-5xl hover:bg-gray-100">1.HOME</a>
          <a href="#" class="block ml-64 py-2.5 px-4 font-aesthetic text-5xl hover:bg-gray-100">2.PROJETS</a>
          <a href="#" class="block ml-48 py-2.5 px-4 font-aesthetic text-5xl hover:bg-gray-100">3.À PROPOS</a>
          <a href="#" class="block ml-80 py-2.5 px-4 font-aesthetic text-5xl hover:bg-gray-100">4.CONTACT</a>
        </nav>
      </div>
    </div>

    <button class="fixed top-0 right-0 z-50 mt-8 mr-8" @click="open = !open">
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </header>
  <Suspense>
    <router-view />
  </Suspense>
  <footer class="bg-black text-white">
    <br />
    <div class="ml-8 grid grid-flow-row-dense grid-cols-2">
      <img src="@/assets/logoBlanc.svg" class="m-8 w-44 bg-black" />
      <div class="-ml-96 mt-10">
        <p class="-ml-36 font-okine text-xs">+33(0)6 62 92 47 75</p>
        <a href="mailto:theopasquarelli68@gmail.com" class="-ml-36 font-okine text-xs">theopasquarelli68@gmail.com</a>
      </div>
    </div>

    <div class="absolute right-0 -mt-32 mr-28 flex bg-black">
      <img src="@/assets/instagram.png" class="w-12" />
      <img src="@/assets/linkedin.png" class="w-12" />
    </div>
    <div class="absolute right-0 -mt-14 mr-28 text-xs"><RouterLink to="/mentions">Mentions légales</RouterLink></div>
  </footer>
</template>

<script></script>
