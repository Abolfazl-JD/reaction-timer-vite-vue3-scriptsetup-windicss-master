<script setup lang="ts">
import router from "@/router"
import { watch } from "vue";
// store
import { gameData } from "../stores/mainData"
const reactionTimerData = gameData()

const playAgain = () => {
  reactionTimerData.$reset()
  router.push({ name: "reaction-game" })
}

const { t, locale } = useI18n()

watch(locale , (newLocale, prevLocale) => {
  reactionTimerData.determineRank()
})
</script>

<template>
  <div class="w-full text-center relative top-28">
    <button @click="playAgain" class="game-btn tracking-1px">
      {{ t('gameResult.again') }}
    </button>
    <p class="mt-5 dark:text-white">
      {{ t('gameResult.reaction-time') }} - {{ reactionTimerData.gameResult }}
    </p>
    <h4 class="text-2xl font-bold text-green-500 mt-7">
      {{ reactionTimerData.rank }}
    </h4>
  </div>
</template>
