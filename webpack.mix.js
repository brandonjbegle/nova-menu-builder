const mix = require('laravel-mix');
let path = require('path')

mix.alias({
  'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
})

mix
  .setPublicPath('dist')
  .js('resources/js/menu-builder.js', 'js')
  .vue({version: 3})
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'optimistdigital/nova-menu-builder',
    }
  });
