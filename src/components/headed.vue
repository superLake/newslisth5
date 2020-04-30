<template>
  <div class="headed">
      <div class="headerbox">
          <h4>{{title}}</h4>
      </div>
  </div>
</template>

<script>
export default {
  name: 'headed',
  data: function () {
    return {
      title: '光明号'
    }
  }
}
</script>

<style lang="stylus">
.headed
  width 100%
  // height 2rem
  background-color #eee
  .headerbox
    text-align center
    height 3rem
    h4
      display inline
      line-height 3rem
</style>
