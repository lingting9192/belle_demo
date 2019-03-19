<template>
  <div class="head">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name:'Head',
  props:{
    title:String
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
</style>

