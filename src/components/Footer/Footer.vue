<template>
  <div class="tabBar-wrap">
    <nav class="nav-tabBar">
      <a class="item active" href="" @click="goto('/home')" :class="{on: isCurrent('/home')}">
        <i class="iconfont iconhome2"></i>
        <span>首页</span>
      </a>
      <a class="item" href="" @click="goto('/classify')" :class="{on: isCurrent('/classify')}">
        <i class="iconfont iconleimupinleifenleileibie"></i>
        <span>分类</span>
      </a>
      <a class="item" href="" @click="goto('/general')" :class="{on: isCurrent('/general')}">
        <i class="iconfont iconico_wupinguanli_kucunpandian1"></i>
        <span>识物</span>
      </a>
      <a class="item" href="" @click="goto('/shop')" :class="{on: isCurrent('/shop')}">
        <i class="iconfont icontubiaolunkuo-"></i>
        <span>购物车</span>
      </a>
      <a class="item" href="" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
        <i class="iconfont iconpersonnone"></i>
        <span>个人</span>
      </a>
    </nav>
  </div>
 
</template>


<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .tabBar-wrap
    width 100%
    height 100px
    background #ffffff
    position fixed
    left 0
    bottom 0
    .nav-tabBar
      width 100%
      height 100%
      display flex
      align-items center
      .item
        margin 24px
        height 100%
        display flex
        flex-direction column
        .iconfont
          font-size 40px
          padding 16px 26px 0 26px
        &.on
          color #02a774  
        span
          font-size 2px
          padding 10px 24px 0 24px
          
        
  
     


</style>
