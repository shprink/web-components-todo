import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  prerenderIndex: null,
  outputTargets: [
    {
      type: 'www',
      baseUrl: process.env.DEMO_BASE_URL,
      // uncomment the following line to disable service workers in production
      serviceWorker: null
    }
  ]
};