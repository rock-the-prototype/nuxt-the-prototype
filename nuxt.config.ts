import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { DarkTheme, LightTheme } from './assets/theme'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: DarkTheme,
        light: LightTheme
      }
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})