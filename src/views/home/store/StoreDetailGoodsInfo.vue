<template>
    <div class="storeDetailGoodsInfo">
        <!-- 商品详情头部 -->
        <van-nav-bar left-arrow @click-left="$router.go(-1)">
            <van-icon name="star-o" slot="right" :color="collect?'#f40':'inherit'" size="1.4rem" style="margin-right:.4rem;" @click="collectStore"/>
            <van-icon name="share" slot="right"  size="1.4rem" style="margin-top:1px;"/>
        </van-nav-bar>
        <div class="storeDetailGoodsInfoContent">
            <h1>【可盐可甜】店长精剪+造型</h1>
            <p class="goodsHasSell">已售:666</p>
            <!-- 轮播图 -->
            <div class="goodsBanner">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img v-lazy="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 抵用券 -->
            <StoreDetailVoucher />
            <!-- 为您推荐 -->
            <div class="goodsRem">
                <h1>为您推荐</h1>
                <div class="goodsRemImg">
                    <div class="goodsRemImgItem" v-for="(item, index) in storePic" :key="index">
                        <img :src="item" alt="" >
                        <div class="goodsRemIntro">
                            <h2>洗发水</h2>
                            <p>￥66</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 详情/购买须知/评价 -->
            <van-tabs v-model="active" sticky type="card">
                <van-tab title="详情">
                    详情
                </van-tab>
                <van-tab title="购买须知">
                    购买须知
                </van-tab>
                <van-tab title="评价">
                    评价
                </van-tab>
            </van-tabs>
            <!-- 立即购买 -->
            <van-submit-bar :price="3050" button-text="立即购买" @submit="buyNow" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'storeDetailGoodsInfo',
    data() { 
        return {
            collect:false,
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
            ],
            storePic:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/cat.jpeg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/cat.jpeg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-1.jpg"],
            
        }
    },
    methods:{
        collectStore(){
            this.collect = !this.collect
            if(this.collect){
                this.$toast('收藏成功');
            }else{
                this.$toast('取消收藏');
            }
        },
        // 立即购买
        buyNow(){

        }
    },
    components:{
        StoreDetailVoucher:() => import('./StoreDetailVoucher')
    }
}
</script>

<style lang='less' scoped>
@import url('../../../style/base.less');
    .storeDetailGoodsInfo{
        .storeDetailGoodsInfoContent{
            h1{
                margin-top: .5rem;
            }
            .goodsHasSell{
                text-align: right;
                font-size: .8rem;
                margin: .4rem;
            }
            .goodsBanner{
                img{
                    padding: 0 .5rem;
                    height: 30vh;
                    width: 100%;
                }
            }
            // 发型师
            .goodsRem{
                h1{
                    text-align: center;
                }
                .goodsRemImg{
                    padding: .2rem 0;
                    margin-top: .5rem;
                    width: 96vw;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    overflow-x: scroll;
                    .goodsRemImgItem{
                        border: @comborder;
                        margin-right: 1rem;
                        padding: .2rem;
                        img{
                            width: 24vw;
                            height: 24vw;
                            
                        }
                        .goodsRemIntro{
                            width: 24vw;
                            text-align: center;
                            padding-bottom: .4rem;
                            h2{
                                margin: .4rem 0;
                                
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<style>
.van-tabs__nav--card {
    box-sizing: border-box;
    height: 30px;
    margin: 0;
    border: 1px solid #ee0a24;
    border-radius: 2px;
}
</style>