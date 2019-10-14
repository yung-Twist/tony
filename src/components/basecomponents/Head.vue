<template>
<div class="head_wrap">
    <van-nav-bar :title="$route.meta.title" left-text="返回" :right-text="rightworld" left-arrow @click-left="goback" @click-right="onClickRight">
        <van-icon :name="rightIcon" slot="right" size="1.2rem" @click="onClickRightICon"/>
    </van-nav-bar>
</div>
</template>

<script>
export default {
    props:{
        rightworld: String,
        rightIcon: String
    },
    data() {
        return {

        }
    },
    methods: {
        goback() {
            this.$router.go(-1)
        },
        onClickRight(){
            this.$emit('onClickRight')
        },
        onClickRightICon(){
            this.$emit('onClickRightICon')
        }
    }
}
</script>

<style lang="less">
.head_wrap {
}
</style>
