<template>
<div class="homeCallboard">
    <van-row type="flex" align="center">
        <van-col span="4">
            <h2>活动通告</h2>
        </van-col>
        <van-col span="20">
            <van-notice-bar :text="msg" background="#f8f8f8"/>
        </van-col>
    </van-row>
</div>
</template>

<script>
export default {
    name: 'homeCallboard',
    data() {
        return {
            msg:'足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
        }
    }
}
</script>

<style lang="less" scoped>
.homeCallboard {
    padding: 0 .5rem;
}
</style>
