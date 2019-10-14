<template>
    <div class="storeDetailInfo">
        <Head></Head>
        <div class="storeInfoContetn">
            <h1>{{storeInfo.name}}</h1>
            <!-- 综合体验 -->
            <div class="storeDetailRate">
                <h3>综合体验</h3>
                <van-icon name="star-o" v-for="(item,index) in storeInfo.rate" :key="index" color="#f40" size="1.5rem"/>
            </div>
            <!-- 概况 -->
            <div class="storeInfoGeneral">
                <h2>概况</h2>
                <p>营业时间：{{storeInfo.businessHours}}</p>
                <p>门店面积：{{storeInfo.area}}平米</p>
                <p>开业时间：{{storeInfo.businessHours}}</p>
                <p>营业时间：{{storeInfo.startTiem}}</p>
                <p>发型师：{{storeInfo.tony}}名</p>
                <p>座位：{{storeInfo.seat}}</p>
            </div>
            <!-- 特色 -->
            <div class="storeInfoFeature">
                <h2>特色</h2>
                <div class="storeInfoFeatureList">
                    <van-tag plain type="warning" v-for="(item, index) in storeInfo.feature" :key="index">{{item}}</van-tag>
                </div>
            </div>
            <!-- 联系电话 -->
            <div class="storeInfoPhone">
                <h2>联系电话</h2>
                <p>{{storeInfo.phone}}</p>
            </div>
            <!-- 店铺描述 -->
            <div class="storeInfoDescribe">
                <h2>店铺描述</h2>
                <p>{{storeInfo.describe}}</p>
            </div>
            <!-- 店铺环境 -->
            <div class="storeInfoEnvironment">
                <h2>店铺环境</h2>
                <div class="storeDetailImg">
                    <img :src="item" alt="" v-for="(item, index) in storeInfo.storePic" :key="index" @click="previewImg(index)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    name: 'storeDetailInfo',
    data() { 
        return {
            storeInfo:{
                name:"美业新趋势（软件园三期店）",
                rate:4,
                businessHours:'周一至周日10：00-22：00',
                area:80,
                startTiem:'2016-6-6',
                tony:6,
                seat:11,
                feature:['不满意重做','无隐形消费'],
                phone:'0592-6666666',
                describe:'这是一家很好的店铺',
                storePic:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/cat.jpeg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/cat.jpeg","https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-1.jpg"],
            }
        }
    },
    methods:{
        // 图片预览
        previewImg(index){
            ImagePreview({
                images:this.storeInfo.storePic,
                startPosition: index,
            });
        },
    }
}
</script>

<style lang='less' scoped>
    .storeDetailInfo{
        .storeInfoContetn{
            padding: .5rem;
            .storeDetailRate{
                h3{
                    margin-right: .5rem;
                }
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-top: .5rem;
            }
            // 概况
            .storeInfoGeneral{
                margin-top: 1rem;
                p{
                    margin-top: .8rem;
                }
            }
            // 特色
            .storeInfoFeature{
                margin-top: 1rem;
                .storeInfoFeatureList{
                    margin-top: .8rem;
                    span{
                        margin: .4rem .4rem 0 0;
                    }
                }
            }
            // 联系电话
            .storeInfoPhone{
                margin-top: 1rem;
                p{
                    margin-top: .8rem;
                }
            }
            // 店铺描述
            .storeInfoDescribe{
                margin-top: 1rem;
                p{
                    margin-top: .8rem;
                }
            }
            // 店铺环境
            .storeInfoEnvironment{
                margin-top: 1rem;
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
            }
        }
    }
</style>