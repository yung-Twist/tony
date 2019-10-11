<template>
  <div class="homeSwiper">
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data() { 
    return {
        images: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
    }
  }
 }
</script>

<style lang='less' scoped>
  .homeSwiper{
      
      img{
          padding: 0 .5rem;
          height: 30vh;
          width: 100%;
      }
  }
</style>