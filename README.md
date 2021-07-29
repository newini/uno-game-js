# UNO game written in JavaScript for HTML
FEATURES:
- Standalone: no need any other source
- Only one file: so load only one JS file
- Single player mode: No server required
- Multi player mode (on progress)


I used:
- JavaScript
- webpack and some loaders: to pack to one file
- [Wallpaper Access](https://wallpaperaccess.com/): used for background image
- [UNO card deck images as svg](https://commons.wikimedia.org/wiki/File:UNO_cards_deck.svg) and [UNO card back image as svg](https://eperezcosano.github.io/uno-part1/)



## 1. Demonstration
DEMO is available on the GitHub page.
[DEMO on GitHub page](https://newini.github.io/uno-game-js/)



## 2. Installation
### 2.1 Use CDN
The code is available on GitHub.
```
<script src='https://raw.githubusercontent.com/newini/uno-game-js/master/uno_game.js'></script>
```

### 2.2 Direct download
Download from GitHub,
```
wget https://raw.githubusercontent.com/newini/uno-game-js/master/uno_game.js
```

and add load uno game js from HTML.
```
<script src='uno_game.js'></script>
```


## 3. How to use?
### 3.1 Configuration
TBA


### 3.2 Put game view
Put this one line in the HTML body.
```
<div id='uno-game'></div>
```


## 4. For developers


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



## TODO
- multiplay


## Reference
- [Creating the UNO game on JavaScript. (Part I)](https://eperezcosano.github.io/uno-part1/)
