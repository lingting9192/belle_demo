<!-- 设置 -->
<template>
  <div id="fit">
    <Head title="设置" :show="true"></Head>
    <ol class="set">
      <li>
        <div class="member_cent">
          <img src="../../../images/bangding.jpeg"/>
          <span>绑定手机和第三方账号</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
      <li>
        <div class="member_cent">
          <img src="../../../images/buju.jpeg"/>
          <span>阅读布局</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
      <li>
        <div class="member_cent">
          <img src="../../../images/goumai.jpeg"/>
          <span>自动购买设置</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
      <!-- <li>
        <div class="member_cent">
          <img src="../../../images/tuisong.jpeg"/>
          <span>推送通知设置</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li> -->
      <li>
        <div class="member_cent">
          <img src="../../../images/time.jpeg"/>
          <span>书架显示上次阅读快速入口</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
      <li>
        <div class="member_cent">
          <img src="../../../images/fanye.jpeg"/>
          <span>点击侧屏两侧均翻页</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
      <!-- <li>
        <div class="member_cent">
          <img src="../../../images/wenben.jpeg"/>
          <span>翻页保留一行文字</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li> -->
      <li>
        <div class="member_cent">
          <img src="../../../images/shuben.jpeg"/>
          <span>打开app直接阅读</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
      <!-- <li>
        <div class="member_cent">
          <img src="../../../images/suofang.jpeg"/>
          <span>手势缩放字体大小</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li> -->
      <!-- <li>
        <div class="member_cent">
          <img src="../../../images/icon_shujia.jpeg"/>
          <span>书架风格设置</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li> -->
      <li>
        <div class="member_cent">
          <img src="../../../images/yueduliang.jpeg"/>
          <span>阅读休息提醒</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
      <li>
        <div class="member_cent">
          <img src="../../../images/clear.jpeg"/>
          <span>清除缓存</span>
        </div>
        <div class="member_cent">
          <span></span>
          <img src="../../../images/right.jpeg" class="member_right"/>
        </div>
      </li>
    </ol>
    <button>切换账户</button>
  </div>
</template>
<script>
import Head from '@/pages/head/head'
export default {
  components:{
    Head
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../common/stylus/font.styl'
#fit
  width 100%
  height 100%
  box-sizing border-box
  // padding-bottom 2rem
  position fixed
  background $color-fff
  left 0
  top 0
  z-index 10000
  overflow hidden
.router-slid-enter-active, .router-slid-leave-active
  transition all .4s
.router-slid-enter, .router-slid-leave-active 
  transform translate3d(2rem, 0, 0)
  opacity 0
.set
  margin-top 0.1rem
  li
    height 1rem
    display flex
    justify-content space-between
    align-items center
    padding 0 0.3rem
.member_cent
  display flex
  align-items center
  img 
    width 0.5rem
    padding-right 0.1rem
  .member_right
    width 0.3rem
    padding-left 0.1rem
button 
  width 7rem
  margin 0.25rem
  background $color-79db99
  height 1rem
  border-radius 10px
  font-size $font-28
  color $color-fff
</style>


