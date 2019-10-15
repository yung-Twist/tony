<template>
    <div class='storeInfo'>
        <div class="StoreDetailWrap">
            <div class="StoreDetailItem" v-for="(item,index) in priceList" :key="index" @click="toStoreDetail(item)">
                <van-row>
                    <van-col span="8">
                        <img :src="item.pic" alt="" class="StoreDetailImg">
                    </van-col>
                    <van-col span="16">
                        <div class="StoreDetailItemBaseinfo">
                            <p>{{item.storeName}}</p>
                        </div>
                        <div class="StoreDetailItemTag">
                            <div class="StoreDetailItemTagLeft">
                                <van-tag plain type="primary" v-for="(item3,index3) in item.storeTag" :key="index3">{{item3}}</van-tag>
                            </div>
                            <p>已售:{{item.hasSell}}</p>
                        </div>
                        <van-tag plain type="warning" v-if="item.customer">{{item.customer}}人正在剪发</van-tag>
                        <div class="StoreDetailItemPrice">
                            <p>￥{{item.price}}</p>
                            <p>￥{{item.originPrice}}</p>
                        </div>
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
            priceList : Array,
        },
        data(){
            return {
            }
        },
        methods:{
            // 前往商品详情
            toStoreDetail(item){
                this.$router.push('/storeDetailGoodsInfo')
            }
        },
    }
</script>
<style scoped lang='less'>
@import url('../style//base');
    .storeInfo{
        // 门店
        .StoreDetailWrap{
            .StoreDetailItem{
                background-color: #fff;
                border:@comborder;
                padding: .5rem;
                margin: .5rem 0;
                .StoreDetailImg{
                    width: 90%;
                }
                .StoreDetailItemBaseinfo{
                    p{
                        font-size: .8rem;
                        margin: .5rem 0;
                    }
                    i{
                        margin-right: .2rem;
                    }
                }
                .StoreDetailItemTag{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: .4rem .4rem .4rem 0;
                    .StoreDetailItemTagLeft{
                        span{
                            margin-right: .4rem;
                        }
                    }
                }
                .StoreDetailItemPrice{
                    margin: .4rem 0;
                    p{
                        display: inline;
                        margin-right: .4rem;
                    }
                    p:nth-child(1){
                        font-weight: bold;
                    }
                    p:nth-child(2){
                        font-size: .6rem;
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
</style>