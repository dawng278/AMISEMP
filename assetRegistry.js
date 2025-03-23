// src/assetRegistry.js
import { Asset } from 'expo-asset';
import { registerAsset } from 'react-native/Libraries/Image/AssetRegistry';

// Đăng ký asset cho expo-router
const routerLogoAsset = Asset.fromModule(require('expo-router/assets/logotype.png'));
registerAsset({
  __packager_asset: true,
  fileSystemLocation: routerLogoAsset.downloaded ? '' : routerLogoAsset.localUri,
  httpServerLocation: '/assets/node_modules/expo-router/assets',
  width: routerLogoAsset.width,
  height: routerLogoAsset.height,
  scales: [1],
  hash: routerLogoAsset.hash,
  name: 'logotype',
  type: 'png',
});
