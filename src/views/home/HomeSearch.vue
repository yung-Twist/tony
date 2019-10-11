<template>
  <div class="homeSearch">
      <van-search placeholder="店铺搜索" @focus='searchStore'/>
  </div>
</template>

<script>
export default {
  name: 'homeSearch',
  data() { 
    return {
        
    }
  },
  methods:{
    searchStore(){
      console.log('搜索店铺按钮')
    }
  },
 }
</script>

<style lang='less' scoped>
  .homeSearch{

  }
</style>