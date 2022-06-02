<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import router from "@/router"
// store
import { gameData } from "../stores/mainData"
const reactionTimerData = gameData()

const showBoxGame = ref(false)
const delay = Math.random() * (5000 - 2000) + 2000

const timeout = ref<number | undefined>(undefined)
onMounted(() => {
  timeout.value = setTimeout(() => {
    showBoxGame.value = true
    calculateReactionTime()
  }, delay)
})

onBeforeUnmount(() => {
  if (timeout.value) clearTimeout(timeout.value)
})

const timer = ref<number | undefined>(undefined)

const calculateReactionTime = () => {
  timer.value = setInterval(() => {
    reactionTimerData.$patch((state) => {
      state.gameResult += 10
    })
  }, 10)
}

const showResult = () => {
  clearInterval(timer.value)
  reactionTimerData.determineRank()
  router.push({ name: "game-result" })
}

const warnUser = () => {
  clearInterval(timer.value)
  reactionTimerData.$reset()
  router.push({ name: "game-warn" })
}

const { t } = useI18n()
</script>

<template>
  <div v-if="showBoxGame">
    <h2 class="text-green-600 dark:text-green-400 game-title">
      {{ t('gameBox.completedTime') }}
    </h2>
    <div
      @click="showResult"
      class="bg-green-500 dark:bg-green-600 box-game"
    ></div>
  </div>
  <div v-else>
    <h2 class="text-red-600 dark:text-red-400 game-title">
      {{ t('gameBox.wait-message') }}
    </h2>
    <div @click="warnUser" class="bg-red-500 dark:bg-red-600 box-game"></div>
  </div>
</template>
