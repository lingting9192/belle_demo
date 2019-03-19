<template>
  <div>
    <Head title="找书"></Head>
    <!-- 好书推荐 -->
    <div class="good_book clearfix">
      <p>好书解读</p>
      <span>更多></span>
    </div>
    <div>
      <swiper :options="swiperOption" class="good_list" ref="mySwiper">
        <swiper-slide v-for="(good,index) in datas.goodBooks" :key="index">
          <img :src="good.src">
          <p>《{{good.name}}》</p>
        </swiper-slide>
        <!-- <swiper-slide>
          <img src="../../images/img1.jpeg">
          <p>《大学中庸》</p>
        </swiper-slide> -->
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 各种推荐分类 -->
    <swiper :options="swiperClassify" class="classify">
      <swiper-slide><p>文学</p><span>全场免费中</span></swiper-slide>
      <swiper-slide><p>商城</p><span>青春有你应援</span></swiper-slide>
      <swiper-slide><p>知识</p><span>精品图书汇集</span></swiper-slide>
      <swiper-slide><p>流量超市</p><span>免费看书</span></swiper-slide>
      <swiper-slide><p>私人图书</p><span>个人汇聚</span></swiper-slide>
      <swiper-slide><p>轻小说</p><span>刀剑神域抢看</span></swiper-slide>
    </swiper>
    <!-- 热门推荐 -->
    <div class="good_book clearfix hot">
      <p>热门推荐</p>
      <span>更多></span>
    </div>
    <ol class="hot_books clearfix">
      <li v-for="(hot,index) in datas.hotBooks" :key="index">
        <img :src="hot.src"/>
        <p>{{hot.name}}</p>
      </li>
      <!-- <li>
        <img src="../../images/img2.jpeg"/>
        <p>几生修得到梅花</p>
      </li> -->
    </ol>
  </div>
</template>
<script>
import Head from '@/pages/head/head'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const debug = process.env.NODE_ENV !== 'production'
const ERR_OK = 0
export default {
  name: 'bookshelf',
  data(){
    return {
      source:'shujia',
      datas:{
        "goodBooks":[
          {"src":"../../images/img1.jpeg","name":"大学中庸"},
          {"src":"../../images/img1.jpeg","name":"大学中庸"},
          {"src":"../../images/img1.jpeg","name":"大学中庸"},
          {"src":"../../images/img1.jpeg","name":"大学中庸"},
          {"src":"../../images/img1.jpeg","name":"大学中庸"},
          {"src":"../../images/img1.jpeg","name":"大学中庸"}
        ],
        "hotBooks":[
          {"src":"../../images/img2.jpeg","name":"几生修得到梅花"},
          {"src":"../../images/img2.jpeg","name":"几生修得到梅花"},
          {"src":"../../images/img2.jpeg","name":"几生修得到梅花"},
          {"src":"../../images/img2.jpeg","name":"几生修得到梅花"},
          {"src":"../../images/img2.jpeg","name":"几生修得到梅花"},
          {"src":"../../images/img2.jpeg","name":"几生修得到梅花"}
        ]
      },
      swiperOption: {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        slidesPerView: 3,
        loop:true,
    　　 autoplay: {
    　　  delay: 2000,
    　　  disableOnInteraction: false
    　　 },
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on:{
          'click':function(){
            console.log(1);
          }
        }
      },
      swiperClassify:{
        slidesPerView: 3,
        spaceBetween: 8,
        loop:false,
        speed: 1000,
        on:{
          'click':function(){
            console.log(2)
          }
        }
      }
    }
  },
  components:{
    Head,
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created(){
    const url = '/api/bookshelf';
    var _that = this;
    _that.$http.get(url).then((response) => {
      response = response.body
    });
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/font.styl'
.good_book
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
.good_list
  img
    width 2.5rem
    height 2.5rem
  p
    width 2.5rem
    text-align center
.swiper-pagination
  width 100%
  span 
    margin 0 0.1rem
.classify
  margin 0.7rem 0.2rem 0 0.2rem !important
  text-align left  
  .swiper-slide
    background #eee
    margin 0 0.1rem
    p
      color $color-333
      font-size $font-32
    span 
      color $color-999
      font-size $font-28
.hot
  margin-top 0.4rem
.hot_books
  li
    width 50%
    float left 
  img 
    width 100%
    height 4rem
  p
    text-align center 
</style>


