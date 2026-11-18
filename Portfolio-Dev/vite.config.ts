import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { NGROK_HOST } = loadEnv(mode, process.cwd(), 'NGROK_HOST')
  const ngrokHost = NGROK_HOST?.trim()

  return {
    plugins: [react()],
    base: '/Portfolio-Dev/',
    optimizeDeps: {
      include: [
        'react',
        'react-dom/client',
        'react/jsx-dev-runtime',
        'react/jsx-runtime',
        'react-router-dom',
      ],
    },
    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true,
      allowedHosts: [
        'aerosol-tremor-happiness.ngrok-free.dev',
        ...(ngrokHost ? [ngrokHost] : []),
      ],
    },
  }
})
