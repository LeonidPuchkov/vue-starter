import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)

app.config.globalProperties.$filters = {
    formatDate(date){
        date = new Date(date)
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        return `${day} - ${month} - ${year}`
    }
}

app.use(router).mount('#app')
