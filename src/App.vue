<template>
<div>
  <x-header :left-options="{showBack:false}" title="Home"></x-header>
  <router-view></router-view>
  <tabbar>
    <tabbar-item>
      <img slot="icon" src="~assets/home.png">
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="~assets/play.png">
      <span slot="label">Vieo</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="~assets/like.png">
      <span slot="label">Like</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="~assets/user.png">
      <span slot="label">My</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
import {
  XHeader,
  Tabbar,
  TabbarItem
} from 'vux'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">@import '~vux/src/styles/reset.less';

body {
    background-color: #fbf9fe;
}
</style>
