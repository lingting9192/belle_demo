<template>
  <div class="head">
    <img v-if="show" src="../../images/back.jpeg" alt="" class="back" @click="back">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name:'Head',
  props:{
    title:String,
    show:Boolean
  },
  methods:{
    back:function(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/font.styl'
.head
  height 1rem
  line-height 1rem
  text-align center
  font-size $font-36
  color $color
  position relative
  background $color-fff
  p
    position relative
    z-index 100
  .back
    width 0.6rem
    padding 0.2rem
    position absolute 
    left 0.1rem
    top 0
    z-index 1000
</style>

