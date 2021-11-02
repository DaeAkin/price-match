import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Master from './components/layouts/Master'

//이벤트 버스 생성
window.eventBus = new Vue()

Vue.config.productionTip = false
Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode : 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router : router,
  // store : store,
  components: { Master },
  render : h => h(Master),
})
