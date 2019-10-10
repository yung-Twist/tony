<template>
<div class="head_wrap">
    <van-row type="flex" justify="space-between" class="head">
        <van-col span="8" @click="goback" class="goback">
            <van-icon name="arrow-left" />
        </van-col>
        <van-col span="8">
            <div class="pagetitle">{{$route.meta.title}}</div>
        </van-col>
        <van-col span="8">
            <slot></slot>
        </van-col>
    </van-row>
    <!-- <div class="head">
            <div class="goback" @click="goback">
                <van-icon name="arrow-left" />
            </div>
        <div class="pagetitle">{{$route.meta.title}}</div>
        <slot></slot>
    </div> -->
    <div style="height:6vh;"></div>
</div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less">
.head_wrap{
    .head{
        background-color: #fff;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 999;
        // background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #2c3e50;
        height:6vh;
        // padding: 8vh 0 2vh 0;
        .pagetitle{
            color:#323233;
            text-align: center;
            font-size: 1rem;
            // letter-spacing: .4rem;
        }
        .goback{
            padding-left: .4rem;
        }
        p{
            padding-right: .5rem;
        }
    }
}
</style>