# UNO game written in JavaScript
I used:
- js
- webpack and loaders: to pack to one file
- [Wallpaper Access](https://wallpaperaccess.com/): Background image



## For developers


### Install webpack
This repo is compiled with `webpack`. So, first install webpack by
```
npm install webpack webpack-cli style-loader css-loader file-loader sass sass-loader --save-dev
```
- `webpack`, `webpack-cli`: webpack
- `style-loader`: Creates `style` nodes from JS strings
- `css-loader`: Translates CSS into CommonJS
- `file-loader`: copy image files to dist
- `sass`, `sass-loader`: Compiles Sass to CSS
- `--save-dev`: write dependencies in `devDependencies` instead of `dependencies` in `package.json`

### Config webpack
Edit `webpack.config.js` to use webpack loaders

### Use webpack
```
npx webpack
```
or
```
npm run build
```
This command will generate `dist/main.js`
