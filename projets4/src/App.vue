<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "@vue/reactivity";
</script>

<template>
  <header class="sticky top-0 z-40 mt-10 h-16 w-full bg-white">
    <div class="flex h-full w-full items-center justify-between">
      <div class="w-40">
        <RouterLink to="/">
          <img src="@/assets/logoNoir.svg" alt="Logo" class="" />
        </RouterLink>
      </div>

      <!--Bouton pour afficher menu-->
      <button
        class="w-fi relative p-1"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
        :class="[menuOuvert ? 'hidden' : '']"
      >
        <img src="@/assets/Menu.svg" class="" />
        <span class="sr-only">Menu</span>
      </button>

      <!--Bouton pour cacher menu-->
      <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : 'hidden']" class="m-5">
        <button class="fixed z-[99]" aria-controls="menu" :aria-expanded="menuOuvert">
          <img src="@/assets/menu_fermer.svg" class="h-8 w-8" />
          <span class="sr-only">Menu</span>
        </button>
      </div>

      <!--Menu hamburger déroulé-->
      <div
        class="fixed inset-0 z-[90] translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
        :class="[' bg-light_grey1  text-purple', menuOuvert ? 'translate-x-0' : '']"
      >
        <div class="m-5 flex items-center">
          <router-link to="/">
            <logo class="stroke-purtext-purple stroke-2" />
          </router-link>
        </div>
        <div class="mt-20 flex items-center justify-center">
          <ul @click="menuOuvert = !menuOuvert">
            <div class="items-between flex flex-col">
              <li class="mt-5 font-aesthetic text-base text-purple">
                <router-link class="" to="/histoire"> HISTOIRE </router-link>
              </li>
              <li class="mt-5 font-aesthetic text-base text-purple">
                <router-link class="" to="/crea"> PÔLE CRÉA </router-link>
              </li>
              <li class="mt-5 font-aesthetic text-base text-purple">
                <router-link class="" to="/event"> EVENT </router-link>
              </li>
              <li class="mt-5 font-aesthetic text-base text-purple">
                <router-link class="" to="/event"> EVENT </router-link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
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
};

let menuOuvert = ref();
menuOuvert.value = false;
</script>

<style>
</style>
