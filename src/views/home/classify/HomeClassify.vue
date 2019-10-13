<template>
<div class="homeClassify">
    <van-swipe @change="onChange">
        <!-- 分类项 -->
        <van-swipe-item v-for="(item,index) in classifyList" :key="index" >
            <div class="homeClassifyWrap">
                <div class="homeClassifyItem" v-for="(item2,index2) in item.pagelist" :key="index2" @click="toClassifyStore(item2)">
                    <img :src="item2.pic" alt="">
                    <p>{{item2.name}}</p>
                </div>
            </div>
        </van-swipe-item>
        <!-- 指示器 -->
        <div class="custom-indicator" slot="indicator">
            <p v-for="(item,index) in classifyList" :key="index" :class='index==current? "indicatorStyleA" : "indicatorStyle"'></p>
        </div>
    </van-swipe>
</div>
</template>

<script>
export default {
    name: 'homeClassify',
    data() {
        return {
            classifyList:[],
            current:0
        }
    },
    methods: {
        // 重组导航数组
        resetlsit() {
            let navList = [{
                    name: '男装',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '女装',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '鞋靴',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '箱包手袋',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '电脑数码',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '珠宝首饰',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '家用电器',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '酒水饮料',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '新品',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '更多',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '医疗保健',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '家具装修',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '礼品鲜花',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '每日签到',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
                {
                    name: '积分兑换',
                    pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'
                },
            ]
            let newlist = []
            let templist = []
            for (let e in navList) {
                if (templist.length < 7) {
                    templist.push(navList[e])
                } else {
                    templist.push(navList[e])
                    newlist.push({
                        pagelist: templist
                    })
                    templist = []
                }
            }
            newlist.push({
                pagelist: templist
            })
            this.classifyList = newlist
        },
        onChange(index){
            this.current = index;
        },
        // 前往商城对应的分类
        toClassifyStore(item){
            this.$router.push({
                path:'/classifyStore',
                query:{
                    classifyName:item.name
                }
            })
        }
    },
    mounted(){
        this.resetlsit()
    }
}
</script>

<style lang="less" scoped>
.homeClassify {
    background-color: #fff;
    // padding-bottom: 1rem;
    .homeClassifyWrap{
        width: 100%;
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px 0;
        .homeClassifyItem{
            width: calc(100% / 4);
            display:flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: .4rem;
            img{
                width: 10vw;
                height: 10vw;
            }
            p{
                font-size: .5rem;
                color: #666;
                margin-top: .4rem;
            }
        }
    }
    .custom-indicator{
        width: 100%;
        height: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .indicatorStyle{
            width: 8px;
            height: 8px;
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 50%;
            margin-left: .4rem;
        }
        .indicatorStyleA{
            width: 16px;
            height: 8px;
            border: 1px solid #ccc;
            background-color: #1989fa;
            border-radius: 8px;
            margin-left: .4rem;
        }
    }
}
</style>
