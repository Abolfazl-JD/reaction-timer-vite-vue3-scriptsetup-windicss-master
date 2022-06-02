<script setup lang="ts">
import router from "@/router"
</script>

<template>
  <div
    class="w-11/12 xs:w-10/12 sm:w-8/12 lg:w-6/12 xl:w-5/12 bg-gray-100 shadow-md dark:(bg-gray-900) mx-auto pl-5 pr-3 py-4 rounded-lg relative top-20 z-50"
  >
    <h2
      class="text-green-800 dark:text-green-200 font-bold text-3xl text-center"
    >
      Welcome to reaction timer game
    </h2>
    <p class="mt-10 text-xl dark:text-white">
      This game is for calculating your reaction time.
    </p>
    <p class="mt-2 leading-8 text-gray-700 dark:text-gray-300 text-lg">
      After clicking start button , wait until the
      <span class="text-red-500">red</span> box turns
      <span class="text-green-500">green</span> ,
      <b
        >the time it takes that you click the box after being green; is your
        reaction time.</b
      >
      Let's start !
    </p>
    <button
      @click="router.push({ name: 'reaction-game' })"
      class="game-btn tracking-5px"
    >
      START
    </button>
  </div>
</template>
