<template>
<div>
  <headers></headers>
  <router-view></router-view>
  <menus></menus>
</div>
</template>

<script>
import Menus from 'components/Menus.vue'
import Headers from 'components/Headers.vue'
export default {
  data() {
    return {}
  },
  components: {
    Headers,
    Menus
  }
}
</script>

<style lang="less">@import '~vux/src/styles/reset.less';

body {
    background-color: #fbf9fe;
}
</style>
