<template lang="html">
<div class="article-list-item">
  <h1 class="title">{{title}}</h1>
</div>
</template>

<script>
export default {
  props: ['title', 'summary', 'mainImage', 'images'
    'type', 'tag', 'commentCount', 'publishTime'
  ]
}
</script>

<style lang="css">

</style>
