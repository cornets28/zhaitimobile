module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    // [
    //   'module:react-native-dotenv',
    //   {
    //     moduleName: 'react-native-dotenv',
    //     path: '.env',
    //     allowUndefined: false,
    //     safe: true,
    //   },
    // ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@actions': './src/redux/actions',
          '@reducers': './src/redux/reducers',
          '@libs': './src/libs',
          '@redux': './src/redux',
          '@types': './src/types',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@components': './src/components',
        },
      },
    ],
  ],
};
