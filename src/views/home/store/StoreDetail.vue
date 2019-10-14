<template>
    <div class="storeDetail">
        <!-- 店铺详情头部 -->
        <van-nav-bar left-arrow @click-left="$router.go(-1)">
            <van-icon name="star-o" slot="right" :color="collect?'#f40':'inherit'" size="1.4rem" style="margin-right:.4rem;" @click="collectStore"/>
            <van-icon name="share" slot="right"  size="1.4rem" style="margin-top:1px;"/>
        </van-nav-bar>
        <div class="storeDetailWrap">
            <h1>{{storeInfo.name}}</h1>
            <!-- 综合体验 -->
            <div class="storeDetailRate" @click="$router.push('/storeDetailInfo')">
                <h3>综合体验</h3>
                <van-icon name="star-o" v-for="(item,index) in storeInfo.rate" :key="index" color="#f40" size="1.5rem"/>
                <van-icon name="arrow" size="1.4rem" style="margin-left:.5rem;"/>
            </div>
            <!-- 店铺图片 -->
            <div class="storeDetailImg">
                <img :src="item" alt="" v-for="(item, index) in storeInfo.storePic" :key="index" @click="previewImg(index)">
            </div>
            <!-- 店铺地址电话 -->
            <div class="storeDetailSite-phone">
                <div class="storeDetailSite">
                    <van-icon name="location-o" color="#1989fa" size="1.5rem"/>
                    <div class="storeDetailSiteDetail">
                        <h3>{{storeInfo.site}}</h3>
                        <h3>{{storeInfo.siteDetail}}</h3>
                    </div>
                </div>
                <div class="storeDetailPhone">
                    <van-icon name="phone" size="1.5rem"  @click="callPhone"/>
                </div>
            </div>
            <!-- 抵用券 -->
            <StoreDetailVoucher />
            <!-- 价目表 -->
            <div class="storeDetailPrice">
                <h1>价目表</h1>
                <van-tabs v-model="activeName">
                    <van-tab v-for="index in 8" :title="'分类 ' + index" :key="index"></van-tab>
                </van-tabs>
                <StoreDetailGoods :priceList="priceList"></StoreDetailGoods>
                <div class="storeDetailPriceMore">
                    <h3>更多</h3>
                    <van-icon name="arrow-down" size="1.2rem"/>
                </div>
            </div>
            <!-- 商品表 -->
            <div class="storeDetailGoods">
                <h1>商品表</h1>
                <van-tabs v-model="activeName">
                    <van-tab v-for="index in 8" :title="'分类 ' + index" :key="index"></van-tab>
                </van-tabs>
                <StoreDetailGoods :priceList="priceList"></StoreDetailGoods>
                <div class="storeDetailGoodsMore">
                    <h3>更多</h3>
                    <van-icon name="arrow-down" size="1.2rem"/>
                </div>
            </div>
            <!-- 发型师 -->
            <div class="storeDetailTonys">
                <h1>发型师</h1>
                <div class="storeDetailTonysImg">
                    <div class="storeDetailTonysImgItem" v-for="(item, index) in storeInfo.storePic" :key="index" @click="previewTonyImg(index)">
                        <img :src="item" alt="" >
                        <div class="storeDetailTonysIntro">
                            <h2>马云</h2>
                            <p>设计师</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    name: 'storeDetail',
    data() { 
        return {
            collect:false,
            storeInfo:{
                name:"美亚新趋势(软件园三期店)",
                rate:5,
                storePic:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/cat.jpeg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/cat.jpeg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-1.jpg"],
                site:'福建省厦门市集美区',
                siteDetail:'软件园三期诚毅大街A区1座10层',
                voucher:2,
                price:[
                    {
                        id:1,
                        title:'推荐',
                    },
                    {
                        id:2,
                        title:'分类一',
                    },
                    {
                        id:3,
                        title:'分类二',
                    },
                    {
                        id:4,
                        title:'分类三',
                    },
                    {
                        id:5,
                        title:'分类四',
                    }
                ],
            },
            priceList:[
                {
                    pic:'https://img.yzcdn.cn/vant/apple-1.jpg',
                    storeName:'【可盐可甜】店长精剪+造型',
                    hasSell:'666',
                    storeTag:['美发','美容','美甲'],
                    customer:2,
                    intro:'小哥哥剪发超级棒',
                    originPrice:118,
                    price:100
                },
                {
                    pic:'https://img.yzcdn.cn/vant/apple-1.jpg',
                    storeName:'【可盐可甜】店长精剪+造型',
                    hasSell:'623',
                    storeTag:['美发','美容','美甲'],
                    customer:2,
                    originPrice:118,
                    price:100
                }
            ],
            activeName:0
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
        // 拨打电话
        callPhone(){
            window.location.href="tel:66666666"
        },
        // 图片预览
        previewImg(index){
            ImagePreview({
                images:this.storeInfo.storePic,
                startPosition: index,
            });
        },
        // 发型师图片预览
        previewTonyImg(index){
            ImagePreview({
                images:this.storeInfo.storePic,
                startPosition: index,
            });
        },
    },
    components:{
        StoreDetailGoods:() => import('../../../components/StoreDetailGoods'),
        StoreDetailVoucher:() => import('./StoreDetailVoucher')
    }
}
</script>

<style lang='less' scoped>
@import url('../../../style/base.less');
    .storeDetail{
        .storeDetailWrap{
            padding: .5rem;
            // 综合评价
            .storeDetailRate{
                h3{
                    margin-right: .5rem;
                }
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-top: .5rem;
            }
            // 店铺图片
            .storeDetailImg{
                padding: .2rem 0;
                margin-top: .5rem;
                width: 96vw;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                overflow-x: scroll;
                img{
                    width: 24vw;
                    height: 24vw;
                    margin-right: 1rem;
                }
            }
            // 店铺地址电话
            .storeDetailSite-phone{
                // background-color: #fff;
                padding: .5rem 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .storeDetailSite{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .storeDetailSiteDetail{
                        margin-left: .2rem;
                        h3:nth-child(2){
                            margin-top: .2rem;
                        }
                    }
                }
            }
            // 价目表
            .storeDetailPrice{
                h1{
                    margin: 1rem 0;
                }
                .storeDetailPriceMore{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
            }
            // 商品表
            .storeDetailGoods{
                h1{
                    margin: 1rem 0;
                }
                .storeDetailGoodsMore{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
            }
            // 发型师
            .storeDetailTonys{
                h1{
                    margin: 1rem 0;
                }
                .storeDetailTonysImg{
                    padding: .2rem 0;
                    margin-top: .5rem;
                    width: 96vw;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    overflow-x: scroll;
                    .storeDetailTonysImgItem{
                        img{
                            width: 24vw;
                            height: 24vw;
                            margin-right: 1rem;
                        }
                        .storeDetailTonysIntro{
                            width: 24vw;
                            text-align: center;
                            border: 1px solid #666;
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