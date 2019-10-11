<template>
<div class="homeStore">
    <van-tabs type="card" color="#666" swipeable v-model="active">
        <!-- 门店标签页 -->
        <van-tab title="门店">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="homeStoreWrap">
                    <div class="homeStoreItem" v-for="(item,index) in storeList" :key="index">
                        <van-row>
                            <van-col span="8">
                                <img :src="item.pic" alt="" class="homeStoreImg">
                            </van-col>
                            <van-col span="16">
                                <div class="homeStoreItemBaseinfo">
                                    <div class="homeStoreItemBaseinfoLeft">
                                        <p>{{item.storeName}}</p>
                                        <van-icon name="star" v-for="(item2,index2) in item.rate" :key="index2" color="#f40"/>
                                    </div>
                                    <div class="homeStoreItemBaseinfoRight">
                                        <p>{{item.distance}}</p>
                                    </div>
                                </div>
                                <div class="homeStoreItemTag">
                                    <van-tag plain type="primary" v-for="(item3,index3) in item.storeTag" :key="index3">{{item3}}</van-tag>
                                </div>
                                <van-tag plain type="warning">{{item.customer}}人正在剪发</van-tag>
                                <div class="homeStoreItemSite">
                                    <p>{{item.site}}</p>
                                </div>
                                <div v-if="item.coupon" class="homeStoreItemCoupon">
                                    <van-tag plain type="danger">优惠券可领取</van-tag>
                                </div>
                                <p class="homeStoreItemDiscount" v-if="item.isdiscount">买单立享{{item.discount}}折优惠</p>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </van-list>
        </van-tab>
        <!-- 美发师页 -->
        <van-tab title="美化师">
            <div class="homeTonyWrap">
                <div class="homeTonyItem" v-for="(item,index) in tonyList" :key="index">
                    <van-row type="flex" align="center">
                        <van-col span="6">
                            <img :src="item.avatar" alt="" class="homeTonyItemAvatar">
                        </van-col>
                        <van-col span="12">
                            <div class="homeTonyItemMiddle">
                                <div class="homeTonyItemName">
                                    <p>{{item.name}}</p>
                                    <van-tag plain type="primary">{{item.position}}</van-tag>
                                </div>
                                <p class="homeTonyItemPrice">￥{{item.price}}</p>
                                <van-icon name="star" v-for="(item2,index2) in item.rate" :key="index2" color="#f40"/>
                                <p class="homeTonyItemTag">{{item.tag}}</p>
                                <p class="homeTonyItemTime">前面有{{item.lineupNum}}人,约等待{{item.waiteTime}}分钟</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="homeTonyItemStatus">
                                <p>总接单:{{item.allOrder}}</p>
                                <van-button round type="primary" size="small" v-if="item.isworking">立即预约</van-button>
                                <van-button round color="#444" size="small" v-if="!item.isworking">休息中</van-button>
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
export default {
    name: 'homeStore',
    data() {
        return {
            storeList:[
                {
                    pic:'https://img.yzcdn.cn/vant/apple-1.jpg',
                    storeName:'美亚新趋势(集美软件园三期店)',
                    distance:'32.3km',
                    rate:3,
                    storeTag:['美发','美容','美甲'],
                    customer:2,
                    intro:'小哥哥剪发超级棒',
                    site:'厦门市集美区诚毅大街888号',
                    coupon:true,//是否有优惠券
                    isdiscount:false,//是否有打折
                    discount:7//打7折
                },
                {
                    pic:'https://img.yzcdn.cn/vant/apple-1.jpg',
                    storeName:'美亚新趋势(集美软件园三期店)',
                    distance:'32.3km',
                    rate:3,
                    storeTag:['美发','美容','美甲'],
                    customer:2,
                    intro:'小哥哥剪发超级棒',
                    site:'厦门市集美区诚毅大街888号',
                    coupon:true,//是否有优惠券
                    isdiscount:true,//是否有打折
                    discount:8//打7折
                },
                {
                    pic:'https://img.yzcdn.cn/vant/apple-1.jpg',
                    storeName:'美亚新趋势(集美软件园三期店)',
                    distance:'32.3km',
                    rate:3,
                    storeTag:['美发','美容','美甲'],
                    customer:2,
                    intro:'小哥哥剪发超级棒',
                    site:'厦门市集美区诚毅大街888号',
                    coupon:false,//是否有优惠券
                    isdiscount:true,//是否有打折
                    discount:7//打7折
                }
            ],
            tonyList:[
                {
                    avatar:require('../../assets/images/avatar.jpg'),
                    name:'小红',
                    position:'设计师',
                    allOrder:1412,
                    price:38,
                    rate:4,
                    isworking:true,
                    tag:'【可甜可盐】 店长精选+造型',
                    waiteTime: 79,
                    lineupNum:5
                },
                {
                    avatar:require('../../assets/images/avatar.jpg'),
                    name:'小红',
                    position:'设计师',
                    allOrder:1412,
                    price:38,
                    rate:4,
                    isworking:false,
                    tag:'【可甜可盐】 店长精选+造型',
                    waiteTime: 79,
                    lineupNum:5
                },
                {
                    avatar:require('../../assets/images/avatar.jpg'),
                    name:'小红',
                    position:'设计师',
                    allOrder:1412,
                    price:38,
                    rate:4,
                    isworking:true,
                    tag:'【可甜可盐】 店长精选+造型',
                    waiteTime: 79,
                    lineupNum:5
                },
            ],
            loading: false,
            finished: false,
            active: 0
        }
    },
    methods:{
        onLoad() {
            
            setTimeout(() => {
                // 加载状态结束
                this.loading = false;
                this.finished = true;
            }, 500);
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../style/base.less');
.homeStore {
    padding: 0 .5rem;
    // 门店
    .homeStoreWrap{
        background-color: #fff;
        .homeStoreItem{
            border-bottom:@comborder;
            padding: .5rem;
            .homeStoreImg{
                width: 90%;
            }
            .homeStoreItemBaseinfo{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .homeStoreItemBaseinfoLeft{
                    p{
                        font-size: .8rem;
                        margin: .5rem 0;
                    }
                    i{
                        margin-right: .2rem;
                    }
                }
                .homeStoreItemBaseinfoRight{

                }
            }
            .homeStoreItemTag{
                margin: .4rem .4rem .4rem 0;
                span{
                    margin-right: .4rem;
                }
            }
            .homeStoreItemSite{
                margin: .5rem 0;
                border-bottom: 1px dashed #080808;
                p{
                    font-size: .8rem;
                    padding-bottom: .5rem;
                }
            }
            .homeStoreItemDiscount{
                font-size: .8rem;
                margin-top: .5rem;
            }
        }
    }
    // 美发师
    .homeTonyWrap{
        background-color: #fff;
        padding: .5rem;
        .homeTonyItem{
            border-bottom:@comborder;
            padding: .5rem;
            .homeTonyItemAvatar{
                width: 90%;
            }
            .homeTonyItemMiddle{
                .homeTonyItemName{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    p{
                        margin-right: .5rem;
                    }
                }
                .homeTonyItemPrice{
                    color: red;
                    font-size: 1.2rem;
                    margin: .4rem 0;
                }
                .homeTonyItemTag{
                    font-size: .6rem;
                    margin: .4rem 0;
                }
                .homeTonyItemTime{
                    font-size: .6rem;
                }
            }
            .homeTonyItemStatus{
                text-align: center;
                p{
                    font-size: .6rem;
                    margin-bottom: .5rem;
                }
            }
        }
    }
}
</style>
<style>
.van-tabs__nav--card {
    margin: 0!important;
}
</style>
