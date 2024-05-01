// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  sourcemap: false,
  typescript: {
    strict: true,
  },
  experimental: {
    componentIslands: true,
    asyncContext: true,
    appManifest: true,
    localLayerAliases: true,
  },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/sitemap', 'nuxt-og-image'],
  nitro: {
    preset: 'netlify',
    // prerender: {
    //   crawlLinks: true,
    //   routes: ['/', 'sitemap.xml'],
    // },
  },
  routeRules: {
    '/': { prerender: true },
    '/sitemap.xml': { prerender: true },
  },
  site: {
    url: 'http://nuxtseo.com',
    name: 'Sample Site',
  },
  sitemap: {
    sitemaps: {
      pages: {
        exclude: ['/blog/**'],
      },
      posts: {
        include: ['/blog/**'],
      },
    },
  },
});
