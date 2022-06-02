import { defineStore } from "pinia"
import I18n from '../../i18n'

const { t } = I18n.global

export const gameData = defineStore({
  id: "game-data",
  state: () => ({
    gameResult: 0,
    rank: "",
  }),
  actions: {
    determineRank() {
      if (this.gameResult < 250) this.rank = t('rank.very-fast')
      else if (this.gameResult < 350) this.rank = t('rank.bit-fast')
      else if (this.gameResult < 500) this.rank = t('rank.slow')
      else this.rank = t('rank.lazy')
    },
  },
})
