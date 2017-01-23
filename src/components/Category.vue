<template lang="html">
  <div class="category-list" >
    <scroller lock-y :scrollbar-x="false">
      <div class="category-frame">
        <flexbox class="category-list" v-bind:style="{width:categorListWidth}" wrap="nowrap">
          <flexbox-item class="item" v-for="catgory in categorList">{{catgory}}</flexbox-item>
        </flexbox>
      </div>
    </scroller>
  </div>
</template>

<script>
import Mock from 'mockjs'
import {
  Flexbox,
  FlexboxItem,
  Scroller
} from 'vux'
export default {
  data() {
    return {
      categorList: Array(10).fill(0).map(v => Mock.Random.cword(2))
    }
  },
  computed: {
    categorListWidth() {
      return (this.categorList.length * 65) + 'px'
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Scroller
  }
}
</script>

<style lang="less">
.category-list{
  background: #f6f6f6;
}
.category-container {
    width: 100%;
    overflow: scroll;
}

.category-list {
    padding: 0.4em 0;
    .item {
        text-align: center;
        &.avitve {
            color: red;
        }
    }
}
</style>
