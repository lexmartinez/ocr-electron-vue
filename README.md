# ocr-electron-vue

[![Build Status](https://img.shields.io/travis/lexmartinez/ocr-electron-vue/master.svg?style=for-the-badge)](https://travis-ci.org/lexmartinez/ocr-electron-vue)
[![GitHub license](https://img.shields.io/github/license/lexmartinez/ocr-electron-vue.svg?style=for-the-badge)](https://github.com/lexmartinez/ocr-electron-vue/blob/master/LICENSE.md)
[![Last version](https://img.shields.io/badge/version-v1.0.0-blue.svg?style=for-the-badge)](https://github.com/lexmartinez/ocr-electron-vue/blob/master/CHANGELOG.md)
<br/>

A Simple OCR Application built on Electron, Vue.js & Tesseract.js

#### Original idea from blog article: Creating a Simple OCR App with Electron, Vue.js & Tesseract.js 

Nowadays **JavaScript** is one of the most popular programming languages, and used for a lot of fields and platforms through Web. In this tutorial we're going to learn how to build an OCR desktop application with **JavaScript** using **Electron** and **Tesseract.js** ... and guess what... our FE will be implemented with **Vue.js**

> [Read full article on the blog](https://lexmartinez.com/read/create-simple-ocr-electron-vue-tesseract)

![](https://github.com/lexmartinez/ocr-electron-vue/raw/master/screenshots/demo.gif)

## Build Setup

``` bash
# clone repository
git clone https://github.com/lexmartinez/ocr-electron-vue.git

# open project folder
cd ocr-electron-vue

# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# lint all JS/Vue component files in `src/`
npm run lint
```

## Production Notes

- The OCR engine needs a set of trained data to process the images, in order to execute this app from bundled app/dmg file you should copy the `eng.traineddata` to root folder of you computer.

- The current release supports only image files.

## License

This project is licensed under MIT License - see the [LICENSE.md](https://github.com/lexmartinez/ocr-electron-vue/blob/master/LICENSE.md) file for details

The project bundling is powered by [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[7c4e3e9](https://github.com/SimulatedGREG/electron-vue/tree/7c4e3e90a772bd4c27d2dd4790f61f09bae0fcef) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
