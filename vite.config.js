import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_REACT_APP_INSTAGRAM_TOKEN': JSON.stringify(process.env.VITE_REACT_APP_INSTAGRAM_TOKEN)
  }
})