module.exports = config => {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-import'),
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        importFrom: './src/Vars.css',
        autoprefixer: {
          flexbox: 'no-2009'
        },
        features: {
          'custom-media-queries': true,
          'nesting-rules': true,
          'color-mod-function': { unresolved: 'warn' }
        },
        stage: 3
      })
    ]
  })

  return config
}
