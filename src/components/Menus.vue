<template lang="html">
  <tabbar>
    <tabbar-item link="/home">
      <img slot="icon" src="~assets/home.png">
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item link="/video">
      <img slot="icon" src="~assets/play.png">
      <span slot="label">Video</span>
    </tabbar-item>
    <tabbar-item link="/like">
      <img slot="icon" src="~assets/like.png">
      <span slot="label">Like</span>
    </tabbar-item>
    <tabbar-item link="/my">
      <img slot="icon" src="~assets/user.png">
      <span slot="label">My</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import {
  Tabbar,
  TabbarItem
} from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="css">
</style>
