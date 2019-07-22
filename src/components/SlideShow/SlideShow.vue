<template>
  <div class="swiper-wrapper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="https://yanxuan.nosdn.127.net/a9827ac1ad9c54b31cda1debf38c3414.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="https://yanxuan.nosdn.127.net/a9827ac1ad9c54b31cda1debf38c3414.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="./images/10.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="./images/11.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="./images/12.jpg">
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="slider">
              <div class="slider_container">
                <img src="./images/13.jpg">
              </div>
            </a>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  import "swiper/dist/css/swiper.css"
     
  export default {
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      
      })     
    }
     
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .swiper-wrapper
    /* bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff */
    .swiper-container
      width 750px
      height 370px
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .slider
            width 100%
            height 370px
            .slider_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 750px
                height 370px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
          
</style>
