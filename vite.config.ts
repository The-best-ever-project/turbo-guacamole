import { defineConfig, ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig((context) => {
  const isDev = context.mode === 'development';

  const baseConfig: UserConfig = {
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: isDev ? (name: string) =>  name : undefined,
      }
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 5173,
      open: false,
    },
  };

  const config: Record<ConfigEnv['command'], UserConfig> = {
    serve: {
      ...baseConfig,
      build: {
        sourcemap: 'inline',
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@app': path.resolve(__dirname, './src/app'),
          '@pages': path.resolve(__dirname, './src/pages'),
          '@widgets': path.resolve(__dirname, './src/widgets'),
          '@features': path.resolve(__dirname, './src/features'),
          '@entities': path.resolve(__dirname, './src/entities'),
          '@shared': path.resolve(__dirname, './src/shared'),
          '@assets': path.resolve(__dirname, './src/assets'),
        },
      },
    },

    build: {
      ...baseConfig,
    },
  };

  return config[context.command];
});
