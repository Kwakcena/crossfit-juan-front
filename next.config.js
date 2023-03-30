/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const withPWA = require("next-pwa")({
  dest: "public",
});

/**
 * @type {import('next').NextConfig}
 */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

module.exports = withPWA(baseConfig);
