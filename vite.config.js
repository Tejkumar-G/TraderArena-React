import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv';
dotenv.config({path:`./environments/.env.${process.env.NODE_ENV}`});
export default defineConfig({
  plugins: [react()],
  define: { 'process.env': process.env },
  resolve: {
    alias: {
      src: __dirname + "/src",
    },
  },
});
