import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify',
  ],
  vuetify: {
    /* vuetify options */
    // @TODO: list all vuetify options
  },
  buildModules: {
    /* nuxt-vuetify module options */
    treeshaking: false,
    useIconCDN: true,

    /* vite-plugin-vuetify options */
    styles: true,
    autoImport: true,
    useVuetifyLabs: true,
  },
  build: {
    // Add Vue 3 specific compiler options here
    vue: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.startsWith('v-')
      }
    }
  },
  // For custom routes, consider using extendRoutes, but generally, it's not needed in Nuxt
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'custom',
  //       path: '/custom',
  //       component: resolve(__dirname, 'pages/custom.vue'),
  //     });
  //   },
  // },
})