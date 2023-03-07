<script setup>
import bouton from "@/components/bouton.vue";
</script>

<template>
  <main class="bg-dark_grey1">
    <div class="flex justify-center">
      <h2 class="font-aesthetic text-8xl text-white">T</h2>
      <h2 class="mt-5 font-aesthetic text-7xl text-white">HÉO</h2>
      <h2 class="font-aesthetic text-8xl text-white">P</h2>
      <h2 class="mt-5 font-aesthetic text-7xl text-white">ASQUARELLI</h2>
    </div>
    <div class="relative z-20 -ml-28 flex justify-center"><img src="../assets/info.png" class="" /></div>
    <div class="absolute right-0 z-0 -mt-40"><img src="../assets/CroixProjets.png" class="" /></div>
    <h4 class="ml-44 font-arsenica text-4xl text-white">Designer & Web Designer</h4>
    <div class="flex justify-center">
      <p class="mt-10 w-9/12 font-okine text-base text-white">
        Bonjour ! Je m’appelle Théo Pasquarelli et je vous souhaite la bienvenue sur mon portfolio. Depuis toujours je suis passionné par la
        création et principalement le dessin qui m’a occupé durant des années et m’occupe encore. Exercer un métier créatif était donc une
        évidence pour moi. Mes domaines de prédilections sont le graphisme et le web design cependant tout type de création m’intéresse, la
        vidéo, la musique et en général la plupart des pratiques artistiques. C’est avec envie et impatience que je me lance à présent dans
        le monde du design et du web design, je suis ouvert à tout type de projet et ai hâte d’emmagasiner de l’expérience.
      </p>
    </div>
    <h4 class="ml-44 mt-20 font-arsenica text-4xl text-white">Parcours et compétences</h4>
    <div class="flex justify-center">
      <p class="mt-10 w-9/12 font-okine text-base text-white">
        Après avoir obtenu mon baccalauréat général option mathématiques et physique chimie, je me suis dirigé vers un BUT Métiers du
        Multimédia et de l’Internet (MMI) à Montbéliard. En plus de mes capacités artistiques acquises lors de nombreuses années de pratique
        personnelle, ce BUT m’a permis d’obtenir de nombreuses compétences dans plusieurs domaines. En design et graphisme majoritairement
        mais également en audiovisuel, en communication ainsi que des notions de développement web.
      </p>
    </div>
    <div class="mt-24 mr-20 ml-20 grid grid-flow-row-dense grid-cols-4">
      <div class="text-center">
        <img src="../assets/illustrator.png" class="inline-flex w-16" />
        <p class="inline-tabl font-okine text-sm font-light text-white">Illustrator</p>
      </div>
      <div class="text-center">
        <img src="../assets/figma.png" class="inline-flex h-auto w-16" />
        <p class="inline-tabl font-okine text-sm font-light text-white">Figma</p>
      </div>
      <div class="text-center">
        <img src="../assets/photoshop.png" class="inline-flex w-16" />
        <p class="inline-tabl font-okine text-sm font-light text-white">Photoshop</p>
      </div>
      <div class="text-center">
        <img src="../assets/indesign.png" class="inline-flex w-16" />
        <p class="inline-tabl font-okine text-sm font-light text-white">InDesign</p>
      </div>
    </div>

    <div class="mt-16 mb-24 mr-20 ml-20 grid grid-flow-row-dense grid-cols-3">
      <div class="text-center">
        <img src="../assets/after.png" class="inline-flex w-16" />
        <p class="inline-tabl font-okine text-sm font-light text-white">After</p>
      </div>
      <div class="text-center">
        <img src="../assets/premiere.png" class="inline-flex h-auto w-16" />
        <p class="inline-tabl font-okine text-sm font-light text-white">Premiere Pro</p>
      </div>
      <div class="text-center">
        <img src="../assets/vscode.png" class="inline-flex h-16" />
        <p class="inline-tabl font-okine text-sm font-light text-white">VS Code</p>
      </div>
    </div>
  </main>
</template>
