<template>
<div class="head_wrap">
    <van-nav-bar :title="$route.meta.title" left-text="返回" :right-text="rightworld" left-arrow @click-left="goback" @click-right="onClickRight"/>
</div>
</template>

<script>
export default {
    props:{
        rightworld: String,
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
        }
    }
}
</script>

<style lang="less">
.head_wrap {
}
</style>
