import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [react()],
   
    test: {
      environment: 'jsdom',  // Sử dụng jsdom để mô phỏng DOM cho test
      globals: true,         // Cho phép sử dụng các biến toàn cục như 'describe', 'test', 'expect'
      setupFiles: './src/setupTests.js',  // Đường dẫn file setup cho test (nếu cần)
    },
  };
});
