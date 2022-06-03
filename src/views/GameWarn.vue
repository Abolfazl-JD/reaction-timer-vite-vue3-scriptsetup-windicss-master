<script lang="ts" setup>
import router from "@/router"

const { t } = useI18n()
</script>

<template>
  <div class="w-full text-center relative top-28">
    <h2 class="text-3xl text-gray-900 dark:text-gray-200">
      {{ t('click-soon') }}
    </h2>
    <p class="mt-5 text-gray-700 dark:text-gray-300">
      {{ t('wait') }}
      <span class="text-red-500">{{ t('red') }}</span>
      <span class="rtl:hidden px-1">{{ t('turn') }}</span>
      <span class="ltr:hidden pr-1">،</span>
      <span class="text-green-500 rtl:pr-1">{{ t('green') }}</span>
      <span class="ltr:hidden px-1">{{ t('turn') }}</span>
    </p>
    <button class="game-btn" @click="router.push({ name: 'reaction-game' })">
      {{ t('restart') }}
    </button>
  </div>
</template>
