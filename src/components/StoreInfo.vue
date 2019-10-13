<template>
    <div class='storeInfo'>
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
    </div>
</template>
<script>
    export default {
        name:'storeInfo',
        props:{
            storeList : Array,
        },
        data(){
            return {
            }
        },
        methods:{
        },
    }
</script>
<style scoped lang='less'>
@import url('../style//base');
    .storeInfo{
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
    }
</style>