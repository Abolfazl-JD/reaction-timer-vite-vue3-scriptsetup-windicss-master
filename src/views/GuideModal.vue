<script setup lang="ts">
import router from "@/router"

const { t } = useI18n()
</script>

<template>
  <div
    class="w-11/12 xs:w-10/12 sm:w-8/12 lg:w-6/12 xl:w-5/12 bg-gray-100 shadow-md dark:(bg-gray-900) mx-auto pl-5 pr-3 py-4 rounded-lg relative top-20 z-50"
  >
    <h2
      class="text-green-800 dark:text-green-200 font-bold text-3xl text-center"
    >
      {{ t('intro.welcome') }}
    </h2>
    <p class="mt-10 text-xl dark:text-white">
      {{ t('intro.body') }}
    </p>
    <p class="mt-2 leading-8 text-gray-700 dark:text-gray-300 text-lg">
      {{ t('intro.wait') }}

      <span class="text-red-500">{{ t('red') }}</span>
      <span class="rtl:hidden px-1">{{ t('turn') }}</span>
      <span class="ltr:hidden pr-1">،</span>
      <span class="text-green-500 pr-1">{{ t('green') }}</span>
      <span class="ltr:hidden px-1">{{ t('turn') }}</span>
      <b
        >{{ t('intro.part2') }}</b
      >
      {{ t('intro.lets-start') }}
    </p>
    <button
      @click="router.push({ name: 'reaction-game' })"
      class="game-btn tracking-2px"
    >
      {{ t('start') }}
    </button>
  </div>
</template>
