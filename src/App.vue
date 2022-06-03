<script setup lang="ts">
import { computed, ref } from "vue"
import { useDark, useToggle } from "@vueuse/core"
import router from "./router"
// components
import ReloadPwa from "./components/ReloadPwa.vue"
// store
import { gameData } from "./stores/mainData"
const reactionTimerData = gameData()

const isDark = useDark()
const toggleThemeMode = useToggle(isDark)

const goToHomePage = () => {
  router.push({ name: "handbook" })
  reactionTimerData.$reset()
}

const { t, locale } = useI18n({
  useScope : 'global'
})

const appDirection = computed(() => locale.value === 'fa' ? 'rtl' : 'ltr')

const showLanguageSwitcher = ref(false)
const toggleLocaleLang = (lang : 'en' | 'fa') => {
    locale.value = lang
    setTimeout(() => {
        showLanguageSwitcher.value = false
    }, 100);
}
</script>

<template>
  <div class="wrapper" :dir="appDirection">
    <ReloadPwa />
    <header>
      <nav class="w-full bg-blue-500 py-2 px-4">
        <div class="flex justify-between items-center">
          <h1
            class="text-white font-bold text-3xl cursor-pointer"
            @click="goToHomePage"
          >
            {{ t('title') }}
          </h1>
          <div class="flex justify-between items-center space-x-4">
            <div class="theme-switcher ltr:sm:pr-5 rtl:sm:pl-5" @click="toggleThemeMode()">
              <transition mode="out-in" name="theme-switch">
                <svg
                  v-if="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-yellow-400 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-yellow-200 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  />
                </svg>
              </transition>
            </div>
            <div class="relative">
              <button @click="showLanguageSwitcher = !showLanguageSwitcher" class="w-18 py-1 rounded-b-sm rounded-t flex justify-between bg-blue-600 px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <transition name="list-icon" mode="out-in">
                      <svg v-if="!showLanguageSwitcher" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                      </svg>
                  </transition>
              </button>

              <ul v-if="showLanguageSwitcher" class="text-gray-700 w-18 absolute z-10 rounded-b shadow divide-y-1 divide-gray-200 top shadow-dark-50 bg-white">
                  <li class="flex justify-between items-center px-2  cursor-pointer hover:bg-gray-200 py-1" @click="toggleLocaleLang('en')">
                      <span>EN</span>
                      <svg v-show="locale === 'en'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                  </li>
                  <li class="flex justify-between px-2 py-1 items-center cursor-pointer hover:bg-gray-200"  @click="toggleLocaleLang('fa')">
                      <span>FA</span>
                      <svg v-show="locale === 'fa'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                  </li>
              </ul>
          </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
@import "./assets/base.css";

.theme-switch-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.theme-switch-enter-active,
.theme-switch-leave-active {
  transition: all 0.3s ease;
}

.theme-switch-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.list-icon-enter-from,
.list-icon-leave-active{
    opacity: 0;
    transform: translateY(2px);
}

.list-icon-enter-active,
.list-icon-leave-active{
    transition: 0.1s ease all;
}
</style>
