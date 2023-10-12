import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'

const rockThePrototypeTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#242424',
        surface: '#242424',
        primary: '#00ffff',
        'primary-darken-1': '#00cccc',
        secondary: '#009999',
        'secondary-darken-1': '#006666',
        // ... Weitere Farben und Variationen
    },
}

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'rockThePrototypeTheme',
        themes: {
            rockThePrototypeTheme,
        },
    },
})

export default defineNuxtPlugin((app) => {
    app.vueApp.use(vuetify)
})