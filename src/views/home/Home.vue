<template>
  <div class="home">
    <HomeLogoSite />
    <HomeSearch />
    <HomeSwiper />
    <HomeCallboard />
    <HomeClassify />
    <HomeStore />
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
  },
  mounted(){
    if(localStorage.getItem('sitedata')){
      this.$store.state.sitedata = JSON.parse(localStorage.getItem('sitedata'))
    }
  },
  components: {
    HomeLogoSite:() =>import('./location/HomeSite'),
    HomeSearch:() =>import('./search/HomeSearch'),
    HomeSwiper:() =>import('./HomeSwiper'),
    HomeCallboard:() =>import('./HomeCallboard'),
    HomeClassify:() =>import('./classify/HomeClassify'),
    HomeStore:() =>import('./store/HomeStore'),
  },
}
</script>
