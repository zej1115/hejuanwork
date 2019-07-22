<template>
    <div id="NavHeaderWrap">
        <div class="headerWrap">    
            <div class="header-top">
                <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
                <div class="souSuo">
                    <i class="iconfont iconsearch1"></i>
                    <span>搜索商品</span>
                </div>
                <div class="btn">
                    <span>登 录</span>
                </div>
            </div>
            <div class="header-bottom">
                <ul>
                    <li v-for="(item,index) in navScorllList" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from "@better-scroll/core"
    export default {
        data(){
            return{
                navScorllList:[
                    "推荐",
                    "推荐",
                    "推荐",
                    "推荐",
                    "推荐",
                    "推荐",
                    "推荐",
                    "hh",
                    "hh",
                    "hh",
                    "hh",
                    "hh",
                    "hh",
                    "hh",
                    "hh",
                    "hh",
                    "推荐",
                    "推荐",
                    "推荐",
                    "推荐",
                    "推荐",
                    "推荐",


                    
                ]
            }
        },
        mounted(){
            new BScroll('.header-bottom',{
                scrollX:true,
                click:true
            })
        }
        
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #NavHeaderWrap
        //position fixed
        .headerWrap
            width 100%
            height 148px
            background-color #eee            
            .header-top
                width 100%
                height 80px
                background-color pink
                display flex
                align-items center
                justify-content space-around
                img 
                    width 140px
                    height 40px
                    background-position center  
                .souSuo
                    margin 10px 36px
                    width 442px
                    height 58px
                    line-height 58px
                    text-align center
                    border-radius 15px
                    background-color #eee 
                    span 
                        padding 18px
                .btn
                    width 74px
                    height 40px
                    line-height 40px 
                    text-align center 
                    border 1px solid red
                    border-radius 15px
                    background-color yellow
            .header-bottom
                width 100%
                height 60px
                background-color orange
                display flex
                overflow hidden
                ul
                    display flex
                    li
                        width 88px
                        height 60px
                        line-height 60px
                        text-align center
                        font-size 16px
                        
                    

</style>
