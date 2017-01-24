import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
import Video from 'views/Video.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/Home',
  name: '首页',
  component: Home,
  showMenu: true,
  icon: require('assets/home.png')
}, {
  path: '/Video',
  name: '视频',
  component: Video,
  showMenu: true,
  icon: require('assets/play.png')
}, {
  path: '*',
  redirect: '/home'
}]

var router = new VueRouter({
  mode: 'history',
  routes,
  // 翻页滚动到上一个位置
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

module.exports = {
  routes,
  router
}
