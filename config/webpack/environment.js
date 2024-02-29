const { environment } = require('@rails/webpacker')

  const webpack = require('webpack');
  environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }))


module.exports = environment

// const webpack = require('webpack');
// environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
//   $: 'jquery/src/jquery',
//   jQuery: 'jquery/src/jquery'
// })
// )

// const { environment } = require('@rails/webpacker');

// const webpack = require('webpack');
// environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
//   $: 'jquery',
//   jQuery: 'jquery'
// }));

// // Add Materialize to the JavaScript load path
// environment.loaders.append('sass', {
//   test: /\.scss$/,
//   use: [
//     {
//       loader: 'sass-loader',
//       options: {
//         additionalData: `@import "materialize";`
//       }
//     }
//   ]
// });

// module.exports = environment;

