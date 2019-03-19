<template>
  <div class="novel">
    <Head title="小说"></Head>
    <div class="search clearfix">
      <div class="search_input clearfix">
        <img src="../../../images/sousuo.jpeg" alt="">
        <input type="text" placeholder="春暖花开" v-model="search"/>
      </div>
      <div class="search_classify">
        <img src="../../../images/fenlei.jpeg" alt="" class="img">
        <p>分类</p>
      </div>
    </div>
    <div class="novel_all">
      <ul class="novel_class clearfix">
        <li v-for="(item,index) in classes" :key="index" @click="goState(index)">{{item}}</li>
        <!-- <li>男生</li>
        <li>女生</li>
        <li>出版</li>
        <li>漫画</li>
        <li>听书</li> -->
      </ul>
      <div class="tab_active" :style="{left:location+'rem'}"></div>
    </div>
    
    <div class="content">
      <div v-if="source == 0">精选</div>
      <div v-if="source == 1">男生</div>
      <div v-if="source == 2">女生</div>
      <div v-if="source == 3">出版</div>
      <div v-if="source == 4">漫画</div>
      <div v-if="source == 5">听书</div>
    </div>
  </div>
</template>
<script>
import Head from '@/pages/head/head'
export default {
  data(){
    return {
      classes:['精选','男生','女生','出版','漫画','听书'],
      location:'0',
      source:0,
      search:''
    } 
  },
  components:{
    Head
  },
  methods:{
    goState:function(index){
      console.log('index',index)
      this.source = index
      this.location = 1.25*index
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../common/stylus/font.styl'
.novel
  position fixed
  left 0
  top 0
  width 100%
  height 100%
  background #fff
  z-index 10000
.search
  width 100%
  padding 0 0.3rem
  box-sizing border-box
  .search_input 
    width 6rem
    height 0.8rem
    background #eef0ec
    text-align left 
    float left
    border-radius 2px
    img 
      width 0.5rem
      margin 0.1rem
      float left
    input 
      width 5rem
      height 0.6rem
      padding 0.1rem 0
      font-size $font-28
      float left
      background #eef0ec
      color #333
  .search_classify
    float right 
    height 0.8rem
    .img 
      width 0.5rem
      display block
    p
      font-size $font-24

.novel_all
  width 100%
  position relative
  .novel_class
    li
      width 1.25rem
      float left
  .tab_active
    position absolute
    left 0
    bottom 0
    width 0.75rem
    margin 0 0.25rem
    height 5px
    background $color
.content
  margin-top 0.3rem
</style>

