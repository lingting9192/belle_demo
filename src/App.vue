<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from './pages/bottom/bottom'
export default {
  name: 'app',
  data(){
    return {
    }
  },
  components:{
    bottom
  },
  methods:{
    chooseTab:function(el){
      this.source = el
    }
  }
}
</script>
<style lang="stylus" scope>
#app
  font-family Hanzipen SC,Wawati SC,KaiTi_GB2312, FangSong,'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-bottom 1.2rem
  height 100%
  box-sizing border-box
</style>
