<template>
  <div class="container">
    <div class="newslistbox" v-for="(listobj,key) of newslist" :key="listobj.nid" :ref="key">
      <div class="left">
        <div class="title">{{listobj.title}}</div>
        <div class="time">{{listobj.publish_time}}</div>
      </div>
      <div class="right">
        <div class="picture">
          <img v-for="(pic,key) of listobj.pictures" :src="pic" :key="key" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container',
  data: function () {
    return {
      newslist: [
        {
          nid: '1',
          title: '10点开抢，手慢无！罗湖近亿元消费券攻略速看！', // 标题
          pictures: [
            'https://appatt.sznews.com/luohu/files/Attachment/2020/04/30/20200430092554955675.jpg'
          ], // 新闻缩略图
          publish_time: '1588209980', // 发布时间
          newsurl:
            'https://luohuapp.sznews.com/jhxtapi/files/szxw/News/202004/30/44845.html?nid=44845&t=944', // 发布链接
          isorigin: '0', // 新闻标签图片
          rtype: '1', // 稿件类型
          type: '2' // 缩略图类型
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.container
  .newslistbox
    display flex
    flex-direction row
    box-sizing border-box
    padding .5rem
    .left
      width 66.7%
    .right
      width 33.3%
      .picture
        overflow hidden
        height 100%
        img
          width 100%
          height 100%
</style>
