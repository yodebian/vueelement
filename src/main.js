import App from './App.vue'
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
