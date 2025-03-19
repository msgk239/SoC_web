import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // 确保所有资源文件都被保留
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  publicDir: 'public',  // 明确指定 public 目录
  optimizeDeps: {
    exclude: ['godot'] // 排除 godot 相关文件的优化
  }
})
