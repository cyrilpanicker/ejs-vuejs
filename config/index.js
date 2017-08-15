const prodConfig = require('./prod.config');
const devConfig = require('./dev.config');
const commonConfig = require('./common.config');

const env = process.env.NODE_ENV;

let config = {};

if(env === 'prod'){
    config = Object.assign(config,prodConfig);
}else{
    config = Object.assign(config,devConfig);
}

config = Object.assign(config,commonConfig);

module.exports = config;