<template>
<div>
  <router-view></router-view>
  <tabbar></tabbar>
</div>
</template>

<script>
import {
  XHeader
} from 'vux'
import Tabbar from 'components/Tabbar.vue'
export default {
  data() {
    return {}
  },
  components: {
    XHeader,
    Tabbar
  }
}
</script>

<style lang="less">
@import '~assets/less/theme.less';
@import '~vux/src/styles/reset.less';
</style>
