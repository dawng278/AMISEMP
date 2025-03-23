const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Cấu hình để xử lý dynamic imports
config.transformer = {
  ...config.transformer,
  asyncRequireModulePath: require.resolve('metro-runtime/src/modules/asyncRequire'),
  unstable_allowRequireContext: true,
};

// Cấu hình resolver
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'mjs', 'cjs'],
  // Bỏ qua các chú thích đặc biệt trong quá trình bundle
  unstable_enablePackageExports: true,
};

module.exports = config;
