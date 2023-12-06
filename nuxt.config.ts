export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      myValue: process.env.IS_THIS_WRONG_TO_DO
    }
  }
})
