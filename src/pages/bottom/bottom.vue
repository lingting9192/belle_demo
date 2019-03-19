<template>
  <div id="bottom">
    <ol class="bottom">
      <li @click="chooseTab('shujia')">
        <img :src="source=='shujia'?require('../../images/shujia_active.jpeg'):require('../../images/shujia.jpeg')"/>
        <p :class="source=='shujia'?'active':''">书架</p>
      </li>
      <li @click="chooseTab('shucheng')">
        <img :src="source=='shucheng'?require('../../images/shucheng_active.jpeg'):require('../../images/shucheng.jpeg')"/>
        <p :class="source=='shucheng'?'active':''">书城</p>
      </li>
      <li @click="chooseTab('wode')">
        <img :src="source=='wode'?require('../../images/wode_active.jpeg'):require('../../images/wode.jpeg')"/>
        <p :class="source=='wode'?'active':''">我的</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data(){
    return {
      source:'shujia'
    }
  },
  methods:{
    chooseTab:function(el){
      console.log(1111)
      this.source = el
      
      if(el=='shujia'){
        this.$router.push({path:'/bookshelf'})
      }else if(el=='shucheng'){
        this.$router.push({path:'/bookcity'})
      }else{
        this.$router.push({path:'/me'})
      }
    }
  }
}
</script>


<style lang="stylus" scope>
@import '../../common/stylus/font.styl'
#bottom
  background #fff
  width 100%
  height 1rem
  position fixed
  left 0
  bottom 0
  padding-top 0.2rem
  border-top 1px solid $border-color
  z-index 999999
.bottom
  display flex
  justify-content space-around
  li img
    width 0.5rem
    height 0.5rem
  li p.active
    color #1296db
</style>

