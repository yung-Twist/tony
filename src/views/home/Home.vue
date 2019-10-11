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
  },
  components: {
    HomeLogoSite:() =>import('./HomeSite'),
    HomeSearch:() =>import('./HomeSearch'),
    HomeSwiper:() =>import('./HomeSwiper'),
    HomeCallboard:() =>import('./HomeCallboard'),
    HomeClassify:() =>import('./HomeClassify'),
    HomeStore:() =>import('./HomeStore'),
  },
}
</script>
