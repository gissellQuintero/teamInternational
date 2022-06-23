
import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Chrome Stable',
      testDir: './playwright/fixtures/desktop/',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
     // "iPhone 11" tests use WebKit browser.
     {
      name: 'iPhone 11',
      testDir: './playwright/fixtures/mobile/',
      use: {
        browserName: 'chromium',
        ...devices['iPhone 11'],
      },
    },
  ],
};

export default config;
