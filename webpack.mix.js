const mix = require('laravel-mix');
let path = require('path')

mix.alias({
  'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
})

mix
  .setPublicPath('dist')
  .js('resources/js/menu-builder.js', 'js')
  .vue({
    extractStyles: mix.inProduction() ? 'css/menu-builder.css' : false,
    processCssUrls: false,
  });
