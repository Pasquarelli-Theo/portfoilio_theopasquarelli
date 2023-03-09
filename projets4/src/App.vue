<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header class="bg-white">
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
      </div>
      <div class="flex justify-center">
        <div class="athena ml-8 mt-8 flex flex-col text-left text-2xl">
          <router-link class="hover:border-main-beige my-6 text-white" to="/" :class="{ 'text-main-beige': $route.name === 'home' }"
            >Accueil
          </router-link>

          <router-link class="hover:text-main-beige my-6 text-white" to="/gal" :class="{ 'text-main-beige': $route.name === 'galerie' }"
            >Galerie
          </router-link>

          <router-link class="hover:text-main-beige my-6 text-white" to="/cla" :class="{ 'text-main-beige': $route.name === 'classement' }"
            >Classement
          </router-link>

          <router-link class="hover:text-main-beige my-6 text-white" to="/who" :class="{ 'text-main-beige': $route.name === 'who' }"
            >Qui sommes-nous
          </router-link>

          <router-link class="hover:text-main-beige my-6 text-white" to="/cont" :class="{ 'text-main-beige': $route.name === 'contact' }"
            >Contact
          </router-link>

          <router-link class="hover:text-main-beige my-6 text-white" to="/account" :class="{ 'text-main-beige': $route.name === 'account' }"
            >Connexion
          </router-link>

          <router-link
            class="hover:text-main-beige my-6 text-white"
            to="/monespace"
            v-if="connecter"
            :class="{ 'text-main-beige': $route.name === 'monespace' }"
            >Mon Espace
          </router-link>
          <router-link
            class="hover:text-main-beige my-6 text-white"
            to="/admin"
            v-if="isAdmin"
            :class="{ 'text-main-beige': $route.name === 'admin' }"
            >Administration
          </router-link>
        </div>
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

<script></script>
