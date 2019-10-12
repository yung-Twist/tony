<template>
  <div class="home-logo-site">
      <div class="home-logo">logo</div>
      <div class="home-site" @click="$router.push('/location')">
          <van-icon name="location-o"  color='#1989fa'/>
          <p>{{siteName}}</p>
          <van-icon name="arrow" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'homeSite',
  data() { 
    return {

    }
  },
  computed:{
    siteName(){
      if(this.$store.state.sitedata.name){
        let sitedata = this.$store.state.sitedata
        return sitedata.name
      }else{
        return '您的位置'
      }
    }
  }
 }
</script>

<style lang='less' scoped>
  .home-logo-site{
      padding: 0 .5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: .5rem;
      .home-site{
          display: flex;
          flex-direction: row;
          align-items: center;
          p{
              font-size: .8rem;
              margin: 0 .4rem;
          }
      }
  }
</style>