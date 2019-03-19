<template>
  <div>
    <Head title="找书"></Head>
    <ul class="classify clearfix">
      <router-link tag="li" to="/bookshelf/novel" @click.native="testRouter" class="bg1">
         小说
      </router-link>
      <!-- <li class="bg1">小说</li> -->
      <li class="bg2">文学</li>
      <li class="bg3">经济</li>
      <li class="bg4">计算机</li>
      <li class="bg5">儿童</li>
      <li class="bg6">社科</li>
    </ul>
    <div class="special_book clearfix">
      <p>好书解读</p>
      <span>更多></span>
    </div>
    <div class="book_list">
      <img src="../../images/city1.jpeg" alt="">
      <img src="../../images/city2.jpeg" alt="">
    </div>
    <div class="special_book clearfix">
      <p>小说推荐</p>
      <span>更多></span>
    </div>
    <ul class="novel_book">
      <li class="clearfix">
        <img src="../../images/novel1.jpeg"/>
        <div class="novel_info">
          <p>肖生克的救赎</p>
          <span>同名电影获奥斯卡奖七项提名</span>
          <strong>作者：</strong><i>斯蒂芬·金</i>
        </div>
      </li>
      <li class="clearfix">
        <img src="../../images/novel2.jpeg"/>
        <div class="novel_info">
          <p>局外人</p>
          <span>二十世纪西方文坛最具跨时代意义小说之一</span>
          <strong>作者：</strong><i>斯蒂芬·金</i>
        </div>
      </li>
      <li class="clearfix">
        <img src="../../images/novel1.jpeg"/>
        <div class="novel_info">
          <p>肖生克的救赎</p>
          <span>二十世纪西方文坛最具跨时代意义小说之一</span>
          <strong>作者：</strong><i>加缪</i>
        </div>
      </li>
    </ul>
    <!-- 嵌套路由必备 -->
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Head from '@/pages/head/head'
export default {
  components:{
    Head
  },
  methods:{
    testRouter:function(){
      this.$router.push({ path: '/bookcity/novel' })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/font.styl'
.classify
  li
    float left 
    width 2.1rem
    margin 0.2rem
    text-align center
    height 0.8rem
    line-height 0.8rem
    margin-bottom 0.1rem
    border-radius 10px
  .bg1
    background linear-gradient(#f2ad7a,#efc8ab)
  .bg2
    background linear-gradient(#96f4c5,#b9f1d5)
  .bg3
    background linear-gradient(#74d4f7,#b0e7fb)
  .bg4
    background linear-gradient(#b69ef9,#d6c9f9)
  .bg5
    background linear-gradient(#dea49a,#d8bcb8)
  .bg6
    background linear-gradient(#aee291,#c0dbb2)
.special_book
  width 100%
  box-sizing border-box
  padding 0.1rem 0.3rem
  font-size $font-32
  p
    float left 
    color #000
  span 
    float right
    color #999  
.book_list
  padding 0 0.15rem
  img 
    width 3.2rem
    float left 
    margin 0 0.2rem
    border-radius 0.1rem
.novel_book
  li
    padding 0 0.25rem
    padding-bottom 0.15rem
    img 
      width 2rem
      float left
    .novel_info
      margin-top 0.2rem
      padding-left 0.5rem
      width 4.5rem
      text-align left 
      float left
      font-size $font-24
      p
        font-size $font-28
        padding-bottom 0.2
        font-weight bold
      span 
        display block
        margin 0.2rem 0
      i 
        color $color

</style>
