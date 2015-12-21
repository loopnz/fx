var path=require('path');
var fs=require("fs");
var webpack=require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports={
    entry:{
        app:"./src/app.js"
    },
    output:{
        path:"./dist",
        pulicPath:"./dist",
        filename:"[name].js",
        chunkFilename:"page-[id].js"
    },
    module:{
        loaders:[
        	{
        		test:/\.vue$/,
        		loader:'vue'
        	},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url?limit=10000&name=img/[hash:8].[name].[ext]'
            }
        ]
    },
     vue: {
	    loaders: {
	      css: ExtractTextPlugin.extract("css")
	    }
  	},
    plugins:[
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html",
            inject:"body",
            chunks:['app']
        })
    ]

}