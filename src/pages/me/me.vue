<template>
  <div id="me">
    <Head title="我的"></Head>
    <div class="account">
      <div class="acc_img"><img src="../../images/icon.jpeg" alt=""></div>
      <p class="acc_status">立即登录</p>
      <img src="../../images/shezhi.jpeg" class="acc_set"/>
      <ol class="acct">
        <li>
          <span>0</span>
          <p>金币</p>
        </li>
        <li>
          <span>0</span>
          <p>礼券</p>
        </li>
        <li>
          <span>签到</span>
          <p>送礼券</p>
        </li>
      </ol>
      <div class="member">
        <div class="member_cent">
          <img src="../../images/huiyuan.jpeg"/>
          <p>开通会员</p>
        </div>
        <div class="member_cent">
          <span>万本好书免费读</span>
          <img src="../../images/right.jpeg"/>
        </div>
      </div>
    </div>
    <div class="acc_info">
      <ol>
        <li>
          <div class="member_cent">
            <img src="../../images/jinqian.jpeg"/>
            <span>我的账户</span>
          </div>
          <div class="member_cent">
            <span>购买、充值记录</span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
        <li>
          <div class="member_cent">
            <img src="../../images/renwu.jpeg"/>
            <span>任务中心</span>
          </div>
          <div class="member_cent">
            <span>做任务得礼券</span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
        <li>
          <div class="member_cent">
            <img src="../../images/jiangpin.jpeg"/>
            <span>兑换中心</span>
          </div>
          <div class="member_cent">
            <span></span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
      </ol>
      <p class="transit"></p>
      <ol>
        <li>
          <div class="member_cent">
            <img src="../../images/xiaoxi.jpeg"/>
            <span>我的消息</span>
          </div>
          <div class="member_cent">
            <span>99+</span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
        <li>
          <div class="member_cent">
            <img src="../../images/pinglun.jpeg"/>
            <span>我的评论</span>
          </div>
          <div class="member_cent">
            <span></span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
      </ol>
      <p class="transit"></p>
      <ol>
        <li>
          <div class="member_cent">
            <img src="../../images/yun.jpeg"/>
            <span>云书架</span>
          </div>
          <div class="member_cent">
            <span>同步书籍至云端</span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
        <li>
          <div class="member_cent">
            <img src="../../images/xiazai.jpeg"/>
            <span>我的下载</span>
          </div>
          <div class="member_cent">
            <span></span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
        <li>
          <div class="member_cent">
            <img src="../../images/yuedu.jpeg"/>
            <span>阅读记录</span>
          </div>
          <div class="member_cent">
            <span></span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
      </ol>
      <p class="transit"></p>
      <ol>
        <li>
          <div class="member_cent">
            <img src="../../images/bangzhu.jpeg"/>
            <span>帮助反馈</span>
          </div>
          <div class="member_cent">
            <span></span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
        <li>
          <div class="member_cent">
            <img src="../../images/guanyu.jpeg"/>
            <span>关于</span>
          </div>
          <div class="member_cent">
            <span></span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
        <li>
          <div class="member_cent">
            <img src="../../images/yuedu.jpeg"/>
            <span>阅读记录</span>
          </div>
          <div class="member_cent">
            <span></span>
            <img src="../../images/right.jpeg" class="member_right"/>
          </div>
        </li>
      </ol>
      <p class="transit1"></p>
    </div>
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
@import '../../common/stylus/font.styl'
.account
  height 4rem
  padding 0.2rem
  background $color-7b7f96
  position relative
  .acc_img
    width 1.5rem
    height 1.5rem
    border-radius 50%
    background #eee
    float left
    img   
      width 1rem
      margin-top 0.25rem
  .acc_status
    color $color-fff
    float left
    font-size $font-32
    margin 0.5rem 0.3rem
  .acc_set
    width 0.7rem
    float right
  .acct
    margin-top 2rem
    display flex
    justify-content space-around
    color $color-fff
  .member
    position absolute
    bottom 0
    left 0.25rem
    width 6.4rem
    padding 0 0.3rem
    height 0.9rem
    background linear-gradient(left,#e9d6a8,#e7bf5e)
    display flex
    align-items center
    justify-content space-between
    border-radius 7px 7px 0 0
    img 
      width 0.4rem
    .member_cent
      display flex
      align-items center
      p
        font-weight bold
.acc_info
  background $color-fff
  li
    padding 0 0.3rem
    height 1rem
    display flex
    align-items center
    justify-content space-between
    .member_cent
      display flex
      align-items center
      img 
        width 0.5rem
        padding-right 0.1rem
      .member_right
        width 0.3rem
        padding-left 0.1rem
.transit
  height 0.2rem
  background $color-eee
.transit1
  height 0.8rem
  background $color-eee
</style>


