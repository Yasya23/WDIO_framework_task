import path from 'node:path';
import { getEnv } from '@utils/get-env.util';

export const config: WebdriverIO.Config = {
  baseUrl: getEnv('BASE_WEBSITE_URL'),

  runner: 'local',

  tsConfigPath: path.resolve(process.cwd(), 'tsconfig.json'),
  specs: [path.resolve(process.cwd(), 'src/test/specs/**/*.spec.ts')],

  maxInstances: 10,
  capabilities: [{ browserName: 'chrome' }],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'html-nice',
      {
        outputDir: './reports/html-reports/',
        filename: 'report.html',
        reportTitle: 'Test Report Title',
        showInBrowser: true,
        linkScreenshots: true,
        useOnAfterCommandForScreenshot: false,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
