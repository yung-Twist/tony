<template>
<div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div id="nav">
        <Tarbar v-if="$route.meta.showtar"></Tarbar>
    </div>
</div>
</template>

<style lang="less">
@import url('./style/reset.less');
@import url('./style/base.less');

#app {
    font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    padding-bottom: 10vh;
}
</style>
