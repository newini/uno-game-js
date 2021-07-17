# UNO game written in JavaScript


## For developers

### Install webpack
This repo is compiled with `webpack`. So, first install webpack by
```
npm install webpack webpack-cli
```

### Install style-loader and css-loader
To handle css files, style-loader and css-loader are required.
```
npm install style-loader css-loader
```

### Config webpack
Open `webpack.config.js` and edit
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```
to use style-loader and css-loader for .css files.

### Use webpack
```
npx webpack
```
This command will generate `dist/main.js`
