<template lang="html">
<div class="">
  <x-header :left-options="{showBack:false}">
    首页
  </x-header>
  <category></category>
</div>
</template>

<script>
import {
  XHeader
} from 'vux'
import Category from '../components/Category.vue'
export default {
  components: {
    XHeader,
    Category
  }
}
</script>
<style lang="css">
</style>
