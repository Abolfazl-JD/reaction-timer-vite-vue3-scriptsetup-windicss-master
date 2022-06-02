<script lang="ts" setup>
import router from "@/router"
</script>

<template>
  <div class="w-full text-center relative top-28">
    <h2 class="text-3xl text-gray-900 dark:text-gray-200">
      Ooh no ! you clicked soon
    </h2>
    <p class="mt-5 text-gray-700 dark:text-gray-300">
      wait until the <span class="text-red-500">red</span> box turns
      <span class="text-green-500">green</span>
    </p>
    <button class="game-btn" @click="router.push({ name: 'reaction-game' })">
      try again
    </button>
  </div>
</template>
