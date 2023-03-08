<template>
  <button
    class="w-64 rounded-xs border-2 bg-transparent p-2 font-okine text-white hover:bg-white hover:text-black dark"
  >
    {{ libelle }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  libelle: String,
});
</script>
