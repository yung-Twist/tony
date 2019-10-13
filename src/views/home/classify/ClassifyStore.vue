<template>
  <div class="classifyStore">
    <Head></Head>
    <!-- 分类下来选择器 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="classifyValue" :options="classifyList" />
    </van-dropdown-menu>
    <!-- 门店信息 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <StoreInfo :storeList="storeList"></StoreInfo>
    </van-list>
  </div>
</template>
<script>
export default {
  name: "classifyStore",
  data() {
    return {
      classifyValue: 0,
      storeList: [
        {
          pic: "https://img.yzcdn.cn/vant/apple-1.jpg",
          storeName: "美亚新趋势(集美软件园三期店)",
          distance: "32.3km",
          rate: 3,
          storeTag: ["美发", "美容", "美甲"],
          customer: 2,
          intro: "小哥哥剪发超级棒",
          site: "厦门市集美区诚毅大街888号",
          coupon: true, //是否有优惠券
          isdiscount: false, //是否有打折
          discount: 7 //打7折
        },
        {
          pic: "https://img.yzcdn.cn/vant/apple-1.jpg",
          storeName: "美亚新趋势(集美软件园三期店)",
          distance: "32.3km",
          rate: 3,
          storeTag: ["美发", "美容", "美甲"],
          customer: 2,
          intro: "小哥哥剪发超级棒",
          site: "厦门市集美区诚毅大街888号",
          coupon: true, //是否有优惠券
          isdiscount: true, //是否有打折
          discount: 8 //打7折
        },
        {
          pic: "https://img.yzcdn.cn/vant/apple-1.jpg",
          storeName: "美亚新趋势(集美软件园三期店)",
          distance: "32.3km",
          rate: 3,
          storeTag: ["美发", "美容", "美甲"],
          customer: 2,
          intro: "小哥哥剪发超级棒",
          site: "厦门市集美区诚毅大街888号",
          coupon: false, //是否有优惠券
          isdiscount: true, //是否有打折
          discount: 7 //打7折
        }
      ],
      classifyList: [
        { text: "美发", value: 0 },
        { text: "美甲", value: 1 },
        { text: "洗剪吹", value: 2 }
      ],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        this.finished = true;
      }, 500);
    }
  },
  components: {
    StoreInfo: () => import("../../../components/StoreInfo")
  },
  mounted() {
    // 获取路由传过来的值
    console.log(this.$route.query.classifyName);
  }
};
</script>
<style scoped lang='less'>
.classifyStore {
}
</style>