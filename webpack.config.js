const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"), // base directory for resolving entry points
    mode: "production",
    optimization: {
        minimize: true
    },
    // devtool: "source-map",// devtool for help us look into problems for prod mode
    // mode: "development",
    // devtool: "inline-source-map", // devtool for help us look into problems for development mode
    entry: {
        main1: "./entry.js" // this will be the name of bundled file, main.js in dist folder
    },
    // entry: { // created multiple entry points here 
    //         pageOne: { // name will be pageOne
    //             import: "./entry.js"
    //         },
    //         pageTwo: {
    //             import: "./entryTwo.js"
    //         }
    // },
    output: {
        clean: true,
        iife: true,
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    watch: true, // sets the watch mode on. checks for files in dependancy tree and can also be set by -watch flag
    watchOptions: {
        ignored: ["**/node_modules"], // ignores bundling this folder completely
    },
    devServer: {
        port: 3001,
        watchFiles: ["**/src/backend/*"],// checks for changes in this file
        static: [
            {
                directory: path.resolve(__dirname, "public"), // path to serve static files, that is from public folder 
                watch: true, // watches for changes in public directory and rebuild
                publicPath: "/" // where to serve it from
            },
            {
                directory: path.resolve(__dirname, "style"),
                watch: false,
                publicPath: "/style/",
                serveIndex: false // this will not allow to access the style directory on the browser.default to true
            }
        ]
    }
}