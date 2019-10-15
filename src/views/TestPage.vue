<template>
    <div class="testpage">
        <Head></Head>
        <BookTime></BookTime>
    </div>
</template>

<script>
export default {
    name: 'testpage',
    data() { 
        return {

        }
    },
    methods:{},
    components:{
        BookTime:() => import('../components/BookTime')
    }
}
</script>

<style lang='less' scoped>
    .testpage{

    }
</style>