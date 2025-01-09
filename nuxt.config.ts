// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default {
  css: ["~/assets/styles/scss/index.scss"],

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/scss/variables" as *;
          `,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },
  },
  modules: ["nuxt-swiper"],
  mode: "static",
  router: {
    base: "test-landing-page-nuxt",
  },
};
