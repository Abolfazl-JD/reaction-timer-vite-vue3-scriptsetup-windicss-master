import { defineConfig } from "windicss/helpers"
import defaultTheme from "windicss/defaultTheme"

export default defineConfig({
  darkMode: "class",
  shortcuts: {
    "game-btn":
      "mt-10 mx-auto block px-8 py-1 text-white bg-green-500 hover:bg-green-600 dark:(bg-green-600 hover:bg-green-700) rounded text-lg",
    "game-title": "font-bold text-xl mt-28 text-center",
    "box-game":
      "relative top-5 pointer text-white text-2xl flex justify-center items-center mx-auto w-8/12 xs:w-4/12 md:w-3/12 lg:w-2/12 h-40 cursor-pointer rounded-md",
  },
  theme: {
    extend: {},
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
})
