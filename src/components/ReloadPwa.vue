<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue"

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
const close = async () => {
    offlineReady.value = false
    needRefresh.value = false
}

const updateSW = async () => {
    await updateServiceWorker()
}

const { t } = useI18n()
</script>

<template>
    <div
    v-if="offlineReady || needRefresh"
    class="
      flex flex-wrap
      md:flex-nowrap
      bg-pink-900
      text-white text-sm
      px-6
      pt-2
      pb-3
      justify-between
      items-center
      align-middle
    "
    role="alert"
  >
    <div class="message mt-1">
      <span v-if="offlineReady"> {{ t('pwa.ready-offline') }} </span>
      <span v-else>
        {{ t('pwa.new-content') }}
      </span>
    </div>
    <div class="buttons flex align-middle gap-2 mt-2 md:mt-0">
      <button
        v-if="needRefresh"
        @click="updateSW()"
        class="
          w-full
          px-4
          py-2
          text-sm text-white
          leading-none
          transition-colors
          duration-150
          bg-pink-900
          border border-white
          rounded
          sm:w-auto
          active:bg-pink-600
          hover:bg-pink-700
          focus:outline-none focus:shadow-outline-purple
        "
      >
        {{ t('pwa.reload') }}
      </button>
      <button
        @click="close"
        class="
          w-full
          px-4
          py-2
          text-sm text-white
          leading-none
          transition-colors
          duration-150
          bg-pink-900
          border border-white
          rounded
          sm:w-auto
          active:bg-pink-600
          hover:bg-pink-700
          focus:outline-none focus:shadow-outline-purple
        "
      >
        {{ t('pwa.close') }}
      </button>
    </div>
  </div>
</template>