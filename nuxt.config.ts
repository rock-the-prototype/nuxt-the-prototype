// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  vue: {
    config: {
      isCustomElement: tag => tag.startsWith('v-')
    }
  },
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
  },
  buildModules: {
    /* nuxt-vuetify module options */
    treeshaking: false,
    useIconCDN: true,

    /* vite-plugin-vuetify options */
    styles: true,
    autoImport: true,
    useVuetifyLabs: true,
  }
})