<template>
    <div class="storeDetailVoucher">
        <van-cell title="抵用券(2)" is-link value="领券"  border @click="getVoucher"/>
        <van-popup v-model="showVoucher" position="right" :style="{ height: '100%',width:'80%' }" close-icon="close" closeable close-icon-position="bottom-right">
            <div class="storeDetailVoucherContent">
                <h1>抵用券</h1>
                <div class="storeDetailVoucherWrap">
                    <div class="storeDetailVoucherItem" v-for="(item, index) in voucherList" :key="index">
                        <div class="storeDetailVoucherItemHead">
                            <p>￥{{item.money}}</p>
                            <div class="storeDetailVoucherItemHeadRight">
                                <p>{{item.type}}</p>
                                <p>{{item.validity}}</p>
                            </div>
                        </div>
                        <div class="storeDetailVoucherItemMiddle">
                            <p>{{item.explain}}</p>
                            <van-button square type="danger" size="mini" v-if="item.status == 1">立即领券</van-button>
                            <van-button square type="danger" disabled size="mini" v-if="item.status == 2">已领取</van-button>
                        </div>
                        <div class="storeDetailVoucherItemBottom">
                            <p>{{item.userBy}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: 'storeDetailVoucher',
    data() { 
        return {
            showVoucher:false,
            voucherList:[
                {
                    money:5.00,
                    type:'满减券',
                    validity:'2019/2/20-2020/2/28',
                    explain:'满99元可用',
                    status:1,
                    userBy:'仅限当前商品使用'
                },
                {
                    money:15.00,
                    type:'满减券',
                    validity:'2019/2/20-2020/2/28',
                    explain:'满299元可用',
                    status:2,
                    userBy:'仅限当前商品使用'
                }
            ]
        }
    },
    methods:{
        getVoucher(){
            this.showVoucher = true
        }
    }
}
</script>

<style lang='less' scoped>
    @import url('../../../style/base.less');
    .storeDetailVoucher{
        border: @comborder;
        .storeDetailVoucherContent{
            padding: 0 .5rem;
            h1{
                text-align: center;
                margin-top: .5rem;
                border-bottom: 1px solid #666;
                padding-bottom: .4rem;
            }
            .storeDetailVoucherWrap{
                .storeDetailVoucherItem{
                    border: 1px solid #666;
                    padding:1rem;
                    margin-top: 1rem;
                    .storeDetailVoucherItemHead{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        p{
                            font-size: 2rem;
                            color: #ee0a24;
                        }
                        .storeDetailVoucherItemHeadRight{
                            margin-left: 1rem;
                            p{
                                font-size: .8rem;
                                color: #666;
                                margin-top: .4rem;
                            }
                        }
                    }
                    .storeDetailVoucherItemMiddle{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        margin: .5rem 0;
                    }
                    .storeDetailVoucherItemBottom{
                        p{
                            font-size: .8rem;
                        }
                    }
                }
            }
        }
    }
</style>