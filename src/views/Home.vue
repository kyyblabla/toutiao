<template lang="html">
  <div id="home">
    <div id="header">
      <x-header :left-options="{showBack:false}">
        首页
      </x-header>
      <category></category>
    </div>
    <div id="article-list">
      <article-list-item
        :title="article.title"
        :summary="article.summary"
        :images="article.images"
        :media-name="article.mediaName"
        :type="article.type"
        :tag="article.tag"
        :comment-count="article.commentCount"
        :publish-time="article.publishTime"
        v-for="article in articleList"></article-list-item>
    </div>
  </div>
</template>

<script>
import {
  XHeader
} from 'vux'
import Category from '../components/Category.vue'
import ArticleListItem from '../components/ArticleListItem.vue'
import Mock from 'mockjs'
export default {
  data() {
    return {
      articleList: Array(10).fill(0).map(() => {
        return {
          title: Mock.Random.ctitle(7, 30),
          summary: Mock.Random.csentence(10, 50),
          images: Array(3).fill(0).map(() => Mock.Random.image('300x250')),
          mediaName: Mock.Random.cname(7, 30),
          type: '',
          tag: Mock.Random.cword(0, 3),
          commentCount: Mock.Random.integer(0, 1000),
          publishTime: Mock.Random.datetime()
        }
      })
    }
  },
  components: {
    XHeader,
    Category,
    ArticleListItem
  }
}
</script>
<style lang="less">
#home {
    padding-top: (2rem + 46/16rem);
}
#header {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
}

#article-list {
    padding: 0 0.5em;
}
</style>
