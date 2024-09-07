import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Travel-Mate-FrontEnd/', 
  test: {
    environment: 'jsdom',  // Sử dụng jsdom để mô phỏng DOM cho test
    globals: true,         // Cho phép sử dụng các biến toàn cục như 'describe', 'test', 'expect'
    setupFiles: './src/setupTests.js',  // Đường dẫn file setup cho test (nếu cần)
  },
})
