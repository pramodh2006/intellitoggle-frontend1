import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // If you installed @nuxt/image earlier, make sure it is in the modules array:
  modules: [
    '@nuxt/image'
  ]
})
