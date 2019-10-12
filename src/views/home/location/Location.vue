<template>
<div class="location">
    <Head rightworld="完成" @onClickRight="onClickRight"></Head>
    <LocationMap />
</div>
</template>

<script>
export default {
    name: 'location',
    data() {
        return {
            longitude:116.70984,//经度
            latitude:27.5033,//纬度
            city:''
        }
    },
    components:{
        LocationMap:()=>import('./LocationMap')
    },
    methods:{
        onClickRight(){
            if(this.$store.state.sitedata.name){
                this.$router.push('/home')
            }else{
                this.$toast('请选择你的位置');
            }
        },
    },
    mounted() {
    },
}
</script>

<style lang="less" scoped>
.location {}
</style>
