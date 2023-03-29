/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const pwaConfig = {
  pwa: {
    dest: "public",
  },
};

const plugins = [[withPWA, pwaConfig]];

const nextConfigWithPlugins = withPlugins(plugins, baseConfig);

module.exports = nextConfigWithPlugins;
