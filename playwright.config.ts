import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:4315/hyundai-/',
    browserName: 'chromium',
    launchOptions: process.env.PW_CHROMIUM_EXECUTABLE ? { executablePath: process.env.PW_CHROMIUM_EXECUTABLE } : {},
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4315 --strictPort',
    url: 'http://127.0.0.1:4315/hyundai-/',
    reuseExistingServer: !process.env.CI,
  },
});
