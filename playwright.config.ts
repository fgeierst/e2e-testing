import { defineConfig, devices } from '@playwright/test';

const defaultUse = {
  ...devices['Desktop Chrome'],
};

const defaultTests = ['**/default.spec.ts'];

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Personal Website',
      use: {
        ...defaultUse,
        baseURL: 'https://florian.geierstanger.org/',
      },
      testMatch: defaultTests,
    },
    {
      name: 'Lernhausfilm',
      use: {
        ...defaultUse,
        baseURL: 'https://lernhausfilm.de/',
      },
      testMatch: defaultTests,
    },
    {
      name: 'Muenchen Plantscht',
      use: {
        ...defaultUse,
        baseURL: 'https://muenchen-plantscht.vercel.app/',
      },
      testMatch: defaultTests,
    },
    {
      name: 'Daily Bingo',
      use: {
        ...defaultUse,
        baseURL: 'https://daily-bingo.vercel.app/',
      },
      testMatch: defaultTests,
    },
  ],
});
