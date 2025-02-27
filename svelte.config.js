import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: null
    }),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/roulin-perro" : ""
    },
    prerender: {
      entries: ["*"]
    }
  }
};

export default config;
