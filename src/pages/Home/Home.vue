<template>
  <div class="mainWrap">
    <!-- 头部 -->
    <Header/>
    <!-- 轮播列表 -->
    <SlideShow/>
    <!-- 商家保障规则 -->
    <Rules/>
    <!-- 商品展示列表 -->
    <ShopList/>
    <!-- 限时抢购 -->
    <PanicBuying/>
    <!-- 秒杀专区 -->
    <div class="seckillListWrap">
      <ul class="seckillList">
        <li class="seckilItem">
          <div class="bigText">9.9超值专区首发</div>
          <div class="smallText">180款爆品新定价</div>
          <img src="https://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
        </li>
        <li class="seckilItem">
          <div class="bigText">一元秒杀抄底</div>
          <div class="smallText">200+好货不止5折</div>
          <img src="https://yanxuan.nosdn.127.net/cc814c4063600d56ddf9d654763e9c0a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/bdb9997848d1c29e83815ea7e49ee215.png?imageView&thumbnail=150x150&quality=75" alt="">
        </li>
      </ul>
      <ul class="seckillList">
        <li class="seckilItem">
          <div class="bigText">断货补单王</div>
          <div class="smallText">严选必买爆款</div>
          <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" alt="">
        </li>
        <li class="seckilItem">
          <div class="bigText">无线回购榜单</div>
          <div class="smallText">买了又买的超值好物</div>
          <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?imageView&thumbnail=150x150&quality=75" alt="">
        </li>
      </ul>
    </div>
    <!-- 私人定制 -->
    <div class="PersonalTailorWrap">
      <div class="PersonalTailor">私人定制</div>
    </div>
    <!-- 私人定制轮播 -->
    <SlideShow/> 
    <!-- 限时购 --> 
    <div class="timeWrap">
      <div class="time">
        <span>限时购</span>
        <div>00:00:00</div>
      </div>
      <div class="more">
        <a href="javascript:;">
          <span>更多</span>
          <i class="iconfont icongengduo"></i>
        </a>
      </div>
    </div>
    <!-- 限时购列表 -->
    <div class="timeListWrap">
      <ul class="timeList">
        <li class="timeItem">
          <img src="https://yanxuan.nosdn.127.net/89307ce0d3406446faddf61039752cda.png?imageView&thumbnail=216x216&quality=75" alt="">
          <i class="iconfont iconnb-"></i>
          <div>199</div>
        </li>
        <li class="timeItem">
          <img src="https://yanxuan.nosdn.127.net/89307ce0d3406446faddf61039752cda.png?imageView&thumbnail=216x216&quality=75" alt="">
          <i class="iconfont iconnb-"></i>
          <div>199</div>
        </li>
        <li class="timeItem">
          <img src="https://yanxuan.nosdn.127.net/89307ce0d3406446faddf61039752cda.png?imageView&thumbnail=216x216&quality=75" alt="">
          <i class="iconfont iconnb-"></i>
          <div>199</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Header from "../../components/Header/Header.vue"
  import SlideShow from "../../components/SlideShow/SlideShow.vue"
  import Rules from "../../components/Rules/Rules.vue"
  import ShopList from "../../components/ShopList/ShopList.vue"
  import PanicBuying from "../../components/PanicBuying/PanicBuying.vue"
  export default {
    components:{
        Header,
        SlideShow,
        Rules,
        ShopList,
        PanicBuying
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .mainWrap
    margin-bottom 10000px
    /*<!-- 秒杀专区 -->*/
    .seckillListWrap
      width 100%
      height 530px
      background-color yellow
      display flex
      flex-direction column
      .seckillList
        width 100%
        height 264px
        background-color #eee
        overflow hidden
        .seckilItem
          width 50%
          height 100%
          text-align center
          float left
          .bigText
            font-size 36px
            margin 20px
          .smallText
            font-size 24px
          img 
            width 150px
            height 150px
    /* <!-- 私人定制 --> */
    .PersonalTailorWrap
      width 100%
      height 100px
      line-height 100px
      .PersonalTailor  
        font-size 42px   
    /* 限时购 */     
    .timeWrap
      width 100%
      height 100px
      //float left
      display flex
      justify-content center
      align-items center
      background-color pink 
      .time
        width 50%
        height 100%
        display flex
      .more
        width 50%
        height 100%
        a
          float right 
    /*限时购列表*/
    .timeListWrap
      width 100%
      height 600px
      background-color #eee
      .timeList
        display flex
        justify-content space-around
        align-items center 
        .timeItem
          width 30%
          height 180px
          display flex
          img
            width 216px
            height 216px


         
            

          
            
          
        
        
          
        




</style>
