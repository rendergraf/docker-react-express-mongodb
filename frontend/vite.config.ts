import react from '@vitejs/plugin-react-swc'
import { createLogger, defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 4040,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3210',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   }
    // },
    watch: {
      usePolling: true
    }
  },
  plugins: [
    react()
  ],
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0')
  },
  resolve: {
    alias: {
      '@src': '/src',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@types': '/src/types',
      '@hooks': '/src/hooks',
      '@store': '/src/store',
      '@reducers': '/src/store/reducers',
    }
  }
})
