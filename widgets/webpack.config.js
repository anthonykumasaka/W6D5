var path = require('path'); 
module.exports = {
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname), 
    filename: "./bundle.js"
  },
  
  devtool: "source-map"
}; 