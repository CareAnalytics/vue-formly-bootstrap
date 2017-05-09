var webpack = require("webpack");
var version = require("./package.json").version;
var banner = "/**\n" + " * vue-formly-bootstrap v" + version + "\n" + " * https://github.com/matt-sanders/vue-formly-bootstrap\n" + " * Released under the MIT License.\n" + " */\n";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel"
  },
  {
    "test": /\.vue?$/,
    "loader": "vue"
  }
];

module.exports = [
    {
        entry: "./src/index",
        output: {
            path: "./dist",
            filename: "vue-formly-bootstrap.js",
            library: "VueFormlyBootstrap",
            libraryTarget: "umd"
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env' : {
                    NODE_ENV : JSON.stringify('production')
                }
            }),
	  new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
	  }),
	  new webpack.optimize.DedupePlugin(),
            new webpack.BannerPlugin(banner, {
                raw: true
            }),
            new ExtractTextPlugin('vue-formly-bootstrap.css', { allChunks: true }),
        ],

        module: {
            loaders: loaders
        },

        vue: {
            loaders: {
                css: ExtractTextPlugin.extract('css'),
                postcss: ExtractTextPlugin.extract('css'),
                sass: ExtractTextPlugin.extract('css!sass'),
            }
        },

        resolve: {
            packageAlias: 'browser'
        }        
    },

    {
        entry: "./src/index",
        output: {
            path: "./dist",
            filename: "vue-formly-bootstrap.min.js",
            library: "VueFormly",
            libraryTarget: "umd"
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.DefinePlugin({
                'process.env' : {
                    NODE_ENV : JSON.stringify('production')
                }
            }),        
            new webpack.BannerPlugin(banner, {
                raw: true
            })
        ],

        module: {
            loaders: loaders
        },

        resolve: {
            packageAlias: 'browser'
        }        

    }

];
