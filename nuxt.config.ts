// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css", "@vuepic/vue-datepicker/dist/main.css"],
  build: {
    transpile: ["primevue", "@vuepic/vue-datepicker"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "@vee-validate/nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "nuxt3-leaflet",
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  headlessui: {
    prefix: "Headless",
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  apollo: {
    autoImports: true,
    authType: "Bearer",
    clients: {
      default: {
        httpEndpoint: "https://api.spacex.land/graphql",
      },
    },
  },

  // here we are setting the route rules for the SPA and SSR routes
  routeRules: {
    "/app/**": { ssr: false },
  },

  app: {
    // pageTransition: {
    //   name: "page", // default
    //   mode: "out-in",
    // },
    // layoutTransition: {
    //   name: "layout",
    //   mode: "out-in", // default
    // },
  },
});
