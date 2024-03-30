import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import monkey, { cdn } from 'vite-plugin-monkey';


export default defineConfig({
  plugins: [
    vue({
//      template: { transformAssetUrls },
    }),
/*    quasar({
//      sassVariables: 'src/quasar-variables.sass',
    }), */
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'https://djon.es/',
        match: ['https://*/courses/*'],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
});
