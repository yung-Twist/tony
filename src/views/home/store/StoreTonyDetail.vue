<template>
    <div class="storeTonyDetail">
        <Head rightIcon="share" @onClickRightICon="onClickRightICon"></Head>
    </div>
</template>

<script>
export default {
    name: 'storeTonyDetail',
    data() { 
        return {

        }
    },
    methods:{
        onClickRightICon(){
            console.log(123)
        }
    }
}
</script>

<style lang='less' scoped>
    .storeTonyDetail{

    }
</style>