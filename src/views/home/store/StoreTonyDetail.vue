<template>
    <div class="storeTonyDetail">
        <Head rightIcon="share" @onClickRightICon="onClickRightICon"></Head>
        <div class="tonyDetailInfo">
                <img src="../../../assets/images/avatar.jpg" alt="">
                <div class="tonyDetailInfoName">
                    <H1>马云</H1>
                    <H3>设计师</H3>
                    <div class="tonyDetailInfoNameRate">
                        <van-icon name="star-o" color="#f40" v-for="value in 5" :key="value" size="1.2rem"/>
                    </div>
                </div>
        </div>
        <!-- 擅长 -->
        <div class="tonyDetailSkilled">
            <p>擅长：剪发美发吹头发</p>
        </div>
        <!-- 地址 -->
        <div class="tonyDetailStoreSite">
            <div class="tonyDetailStoreSiteInfo">
                <h2>美亚新趋势(软件园三期店)</h2>
                <p><van-icon name="location-o"/>美亚新趋势(软件园三期店)</p>
                <div class="tonyDetailInfoStoreRate">
                    <van-icon name="star-o" color="#f40" v-for="value in 5" :key="value" size="1.2rem"/>
                </div>
            </div>
            <van-icon name="arrow" size="2rem"/>
        </div>
        <div class="tonyDetailList">
            <StoreDetailGoods :priceList="priceList"></StoreDetailGoods>
        </div>
        <!-- 立即购票 -->
        <van-submit-bar button-text="立即购票" @submit="buyNow" />
    </div>
</template>

<script>
export default {
    name: 'storeTonyDetail',
    data() { 
        return {
            priceList:[
                {
                    pic:'https://img.yzcdn.cn/vant/apple-1.jpg',
                    storeName:'【可盐可甜】店长精剪+造型',
                    hasSell:'666',
                    storeTag:['美发','美容','美甲'],
                    intro:'小哥哥剪发超级棒',
                    originPrice:118,
                    price:100
                },
                {
                    pic:'https://img.yzcdn.cn/vant/apple-1.jpg',
                    storeName:'【可盐可甜】店长精剪+造型',
                    hasSell:'623',
                    storeTag:['美发','美容','美甲'],
                    originPrice:118,
                    price:100
                }
            ],
        }
    },
    methods:{
        onClickRightICon(){
            console.log(123)
        },
        // 立即购票
        buyNow(){
            this.$router.push('/storeBuyTicket')
        }
    },
    components:{
        StoreDetailGoods:() => import('../../../components/StoreDetailGoods'),
    }
}
</script>

<style lang='less' scoped>
@import url('../../../style/base.less');
    .storeTonyDetail{
        .tonyDetailInfo{
            padding: 1rem;
            display: flex;
            flex-direction: row;
            border-bottom: @comborder;
            background-color: #fff;
            img{
                width: 20vw;
                height:20vw;
            }
            .tonyDetailInfoName{
                flex: 1;
                margin-left: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }
        .tonyDetailSkilled{
            padding: 1rem;
            border-bottom: @comborder;
            background-color: #fff;
        }
        .tonyDetailStoreSite{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: #fff;
            margin-top: .5rem;
            p{
                display: flex;
                align-items: center;
                margin: .5rem 0;
            }
        }
    }
</style>