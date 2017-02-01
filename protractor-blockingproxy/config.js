exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: [ 'spec.ts' ],
  beforeLaunch: () => {
    require('ts-node').register({
      project: '.'
    });
  }
};
