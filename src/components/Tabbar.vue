<template lang="html">
  <div>
    <tabbar>
      <tabbar-item :link="route.path"  v-for="route in routeList">
        <img slot="icon" :src="route.icon">
        <span slot="label">{{route.name}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem
} from 'vux'
import {
  routes
} from 'src/routers'
export default {
  computed: {
    routeList: () => routes.filter(r => r.showMenu)
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="css">
</style>
