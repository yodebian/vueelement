# vueelement

> A Vue.js project and Element-ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


## STEPS

```
1.- vue init webpack-simple vueelement

? Project name vueelement
? Project description A Vue.js project
? Author 
? Use sass? Yes

   vue-cli · Generated "vueelement".

   To get started:
   
     cd vueelement
     npm install
     npm run dev.

2.- cd vueelment

    npm install

3.- npm i element-ui -S
4.- npm i element-theme -g -S
5.- npm i element-theme-default -D

6.- et -i element-variables.css
7.- Build theme execute: et

8.- import element-ui in main.js
import App from './App.vue'
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})

... ERROR THEN :D

ERROR in ./theme/index.css
Module parse failed: /Users/ricardotoledo/vue-proyectos/vueelement/theme/index.css Unexpected token (1:0)
You may need an appropriate loader to handle this file type.
| .el-form-item__content:before, .el-form-item__content:after {
|     display: table;
|     content: "";
 @ ./src/main.js 2:0-28
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js


```