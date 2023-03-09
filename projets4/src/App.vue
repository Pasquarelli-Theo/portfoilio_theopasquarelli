<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
<header class="sticky top-0 z-40 h-16 w-full bg-white">
      <div class="flex h-full w-full items-center justify-between">
        <div class="w-40">
          <RouterLink to="/">
            <img
              src="@/assets/logoNoir.svg"
              alt="Logo"
              class=""
            />
          </RouterLink>
        </div>
        
        <div class="">
          <MenuIcon
            class="text-black w-10 cursor-pointer"
            @click="MenuOpen = !MenuOpen"
          />
        </div>

        <nav
          class="absolute   h-screen w-full -translate-y-[200%] bg-red-100 text-lg"
          :class="MenuOpen && 'translate-y-0'"
        >
          <XIcon
            class="float-right  w-10"
            @click="MenuOpen = !MenuOpen"
          />
          <ul
            class=" flex flex-col gap-8 py-4 font-archivo-black uppercase text-black"
          >
            <RouterLink to="/" class="transition-colors duration-150 hover:text-red-100" @click="MenuOpen = !MenuOpen"
              >1. HOME</RouterLink
            >
            <RouterLink to="/projets" @click="MenuOpen = !MenuOpen"
              >2. PROJETS</RouterLink
            >
            <RouterLink to="/about" @click="MenuOpen = !MenuOpen"
              >3. À PROPOS</RouterLink
            >
            <RouterLink to="/contact" @click="MenuOpen = !MenuOpen"
              >4. CONTACT</RouterLink
            >
          </ul>
        </nav>
      </div>
    </header>
  <!-- <header class="bg-white">
    <RouterLink to="/"><img src="@/assets/logoNoir.svg" class="mt-5 ml-5 w-36" /></RouterLink>

    <div class="absolute z-40"><div
      class="bg-main-blue fixed h-screen w-screen overflow-y-hidden"
      v-on:click="menuVisible = !menuVisible"
      :class="{ hidden: menuVisible }"
    >
      <div class="mt-4 flex justify-start">
        <button v-if="!menuVisible" v-on:click="menuVisible = !menuVisible" class="mx-4">
          <img src="@/assets/menu_fermer.svg" alt="Menu Fermer" />
        </button>
      </div> -->


      <!-- <div class="flex justify-center">
        <div class="ml-8 mt-8 font-aesthetic flex flex-col text-left text-2xl">
          <router-link class="my-6 text-white" to="/" :class="{ 'text-main-beige': $route.name === 'home' }"
            >1. HOME
          </router-link>

          <router-link class="my-6 text-white" to="/projets" :class="{ 'text-main-beige': $route.name === 'galerie' }"
            >2. PROJETS
          </router-link>

          <router-link class="my-6 text-white" to="/about" :class="{ 'text-main-beige': $route.name === 'classement' }"
            >3. À PROPOS
          </router-link>

          <router-link class="my-6 text-white" to="/contact" :class="{ 'text-main-beige': $route.name === 'who' }"
            >4. CONTACT
          </router-link>
        </div>
      </div> -->
    <!-- </div>
    </div>
  </header> -->

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

    <div class="absolute right-0 -mt-32 mr-28 flex">
      <img src="@/assets/instagram.png" class="w-12" />
      <img src="@/assets/linkedin.png" class="w-12" />
    </div>
    <div class="absolute right-0 -mt-14 mr-28 text-xs"><RouterLink to="/mentions">Mentions légales</RouterLink></div>
  </footer>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
export default {
  name: "App",
  components: {
    MenuIcon,
    XIcon,
  },
  }
</script>

<style>
/* Import Styles application */
@import "./assets/style.css";
</style>