<template>
    <div class='HairdresserInfo'>
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
                                <van-button round type="primary" size="small" v-if="item.isworking" @click="toTonyDetail">立即预约</van-button>
                                <van-button round color="#444" size="small" v-if="!item.isworking">休息中</van-button>
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </div>
    </div>
</template>
<script>
    export default {
        name:'HairdresserInfo',
        props:{
            tonyList:Array
        },
        data(){
            return {
            }
        },
        methods:{
            // 前往发型师详情
            toTonyDetail(){
                this.$router.push('/storeTonyDetail')
            }
        },
    }
</script>
<style scoped lang='less'>
@import url('../style/base');
    .HairdresserInfo{
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