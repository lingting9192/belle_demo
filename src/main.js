import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'

import vueResource from 'vue-resource'

import './common/js/rem'
import './common/stylus/common.css'
import './common/stylus/font.styl'
import './common/stylus/swiper.min.css'
import FastClick from 'fastclick'
//解决移动端300ms的延迟问题
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(vueResource);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
