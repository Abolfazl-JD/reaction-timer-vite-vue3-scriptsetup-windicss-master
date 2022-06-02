import { createRouter, createWebHistory } from "vue-router"
import GuideModal from "@/views/GuideModal.vue"
import GameBox from "@/views/GameBox.vue"
import GameResult from "@/views/GameResult.vue"
import GameWarn from "@/views/GameWarn.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "handbook",
      component: GuideModal,
    },
    {
      path: "/reaction-timer-game",
      name: "reaction-game",
      component: GameBox,
    },
    {
      path: "/game-result",
      name: "game-result",
      component: GameResult,
    },
    {
      path: "/game-warn",
      name: "game-warn",
      component: GameWarn,
    },
  ],
})

export default router
