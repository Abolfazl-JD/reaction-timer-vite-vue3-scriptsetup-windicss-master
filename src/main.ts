import { createApp } from "vue"
import { createPinia } from "pinia"
import I18n from '../i18n'

import App from "./App.vue"
import router from "./router"
import "virtual:windi.css"

const i18n = I18n

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount("#app")
