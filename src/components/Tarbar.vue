<template>
    <div class="Tarbar">
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/find">发现</van-tabbar-item>
            <van-tabbar-item icon="chat-o" to="/news">消息</van-tabbar-item>
            <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'Tarbar',
    data() {
        return {
            active:0,
        }
    }
}
</script>

<style lang="less" scoped>
.Tarbar {}
</style>
