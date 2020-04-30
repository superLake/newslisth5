<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <headed/>
    <container/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import headed from './components/headed'
import container from './components/container'

export default {
  name: 'hello',
  components: {
    // HelloWorld
    headed,
    container
  },
  methods: {
    getNewsList: function () {
      this.$http.post('/jhxtapi/api.php?s=/News/getNewsListCachev2', {
        Page: '1',
        PageSize: '20',
        device: '3213',
        flag: '0',
        tid: '303',
        siteid: '1',
        uid: '213'
      }).then(response => {
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.getNewsList()
  }
}
</script>

<style>

</style>
