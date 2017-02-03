<template lang="html">
  <div class="article-list-item">
    <h3 class="title">{{title}}</h3>
    <div class="images">
      <flexbox>
        <flexbox-item v-for="img in images">
          <img :src="img">
        </flexbox-item>
      </flexbox>
    </div>
    <div class="info">
      <span v-if="tag" class="tag">{{tag}}</span> <span>{{mediaName}}</span> <span>评论{{commentCount}}</span> <span>{{publishTime}}</span>
    </div>
  </div>
</template>

<script>
  /**
   * type:
   * text, 纯文字
   * text_right_image, 左文右图
   * text_bottom_image, 上文下图
   * text_images 图片列表
   *
   */
  import {
    Flexbox,
    FlexboxItem
  } from 'vux'
  export default {
    props: ['title', 'summary', 'images', 'mediaName',
      'type', 'tag', 'commentCount', 'publishTime'
    ],
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .article-list-item {
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border-bottom: none;
    }
    .images {
      img {
        width: 100%;
      }
    }
    .info {
      font-size: 0.8rem;
      span.tag {
        font-size: 0.8rem;
        padding: 0.1rem;
        color: red;
        border: 1px solid red;
        border-radius: 2px;
      }
    }
  }
</style>
