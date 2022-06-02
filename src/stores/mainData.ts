import { defineStore } from "pinia"

export const gameData = defineStore({
  id: "game-data",
  state: () => ({
    gameResult: 0,
    rank: "",
  }),
  actions: {
    determineRank() {
      if (this.gameResult < 250) this.rank = "you're very fast "
      else if (this.gameResult < 350) this.rank = "you're a bit fast "
      else if (this.gameResult < 500) this.rank = "you're slow "
      else this.rank = "you're super lazy "
    },
  },
})
