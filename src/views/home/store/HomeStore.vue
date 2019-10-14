<template>
<div class="homeStore">
    <van-tabs type="card" color="#666" swipeable v-model="active">
        <!-- 门店标签页 -->
        <van-tab title="门店">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <StoreInfo :storeList="storeList"></StoreInfo>
            </van-list>
        </van-tab>
        <!-- 美发师页 -->
        <van-tab title="美化师">
            <Hairdresser :tonyList="tonyList"></Hairdresser>
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
                    avatar:require('../../../assets/images/avatar.jpg'),
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
                    avatar:require('../../../assets/images/avatar.jpg'),
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
                    avatar:require('../../../assets/images/avatar.jpg'),
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
    components:{
        StoreInfo:() => import('../../../components/StoreInfo'),
        Hairdresser:() => import('../../../components//Hairdresser')
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
@import url('../../../style/base.less');
.homeStore {
    padding: 0 .5rem;
    
}
</style>
<style>
.van-tabs__nav--card {
    margin: 0!important;
}
</style>
