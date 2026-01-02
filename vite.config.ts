import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // 개발 서버 설정
    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    // 플러그인
    plugins: [react()],

    // 환경변수 주입
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    // 경로 alias
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    // 🔑 GitHub Pages 배포 시 경로 맞추기
    // 저장소 이름을 base로 지정해야 정적 파일을 올바르게 불러옴
    base: '/sikaki_web/',
  };
});
