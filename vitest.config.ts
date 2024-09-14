import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin';

// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineConfig({
  plugins: [
    // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
    storybookTest(),
    // More info at: https://github.com/storybookjs/vite-plugin-storybook-nextjs
    storybookNextJsPlugin(),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
    // Make sure to adjust this pattern to match your stories files.
    include: ['**/*.stories.?(m)[jt]s?(x)'],
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
});