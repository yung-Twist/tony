<template>
    <div class="locationMap">
        <!-- 搜索 -->
        <van-search placeholder="您在哪里?" @input='searchStore' v-model="keyword"/>
        <!-- 加载 -->
        <div class="loadingAmt"  v-if="loadingMap" style="text-align:center;width:100vw;">
            <van-loading type="spinner" color="#1989fa"/>
        </div>
        <!-- 地图 -->
        <div id="container" style="width:100vw;height:40vh;"></div>
        <!-- 搜索结果弹出 -->
        <van-radio-group v-model="radio">
            <van-cell-group>
                <van-cell :title="item.name" clickable @click='clickStie(item)' :label="item.address" v-for="(item,index) in searchValue" :key="index">
                    <van-radio slot="right-icon" :name="item.id" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'locationMap',
    data() { 
        return {
            longitude:0,//经度
            latitude:0,//纬度
            city:'',
            keyword:'',
            searchService:[],
            searchValue:[],
            radio:0,
            loadingMap:true
        }
    },
    methods:{
        // 搜索
        searchStore(){
            // console.log(this.keyword)
            var keyword = this.keyword;
            var region = new qq.maps.LatLng(this.latitude,this.longitude);
        
            this.searchService.setPageCapacity(10);
            this.searchService.searchNearBy(keyword, region, 200000);//根据中心点坐标、半径和关键字进行周边检索。
        },
        toggle(){
            
        },
        // 点击搜索的地图
        clickStie(item){
            this.radio = item.id
            this.latitude = item.latLng.lat
            this.longitude = item.latLng.lng
            this.setMap()
            localStorage.setItem('sitedata',JSON.stringify(item))
            this.$store.state.sitedata = item
        },
        //定位获得当前位置信息
        getMyLocation() {
            var geolocation = new qq.maps.Geolocation("JYLBZ-ZGQ3U-5JFV5-4WUDC-OK676-JVB3E", "建材-小程序");
            geolocation.getIpLocation(this.showPosition, this.showErr);
        },
        // 地图加载
        showPosition(position) {
            // console.log(position);
            this.latitude = position.lat;
            this.longitude = position.lng;
            this.city = position.city;
            this.setMap();
            this.keyword = position.city
            this.searchStore()
            this.loadingMap = false
        },
        // 地图加载错误回掉
        showErr() {
            console.log("定位失败");
            this.getMyLocation();//定位失败再请求定位，测试使用
        },
        // 地图初始化
        setMap() {
            let that = this
            //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
            //设置地图中心点
            var myLatlng = new qq.maps.LatLng(this.latitude,this.longitude);
            //定义工厂模式函数
            var myOptions = {
                zoom: 10,               //设置地图缩放级别
                center: myLatlng,    //设置中心点样式
                mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
            }
            // //获取dom元素添加地图信息
            var map = new qq.maps.Map(document.getElementById("container"), myOptions);
            //给定位的位置添加文本标注
             var marker = new qq.maps.Marker({
                position: myLatlng,
                map: map
            });
            //给定位的位置添加文本标注
            var marker = new qq.maps.Label({
                position: myLatlng,
                map: map,
                //content:'我当前的位置'
            });
            //设置圆形
            new qq.maps.Circle({
                center:new qq.maps.LatLng(39.936273,116.44004334),
                radius: 200000,
                map: map
            });
            var latlngBounds = new qq.maps.LatLngBounds();
            //调用Poi检索类
            this.searchService = new qq.maps.SearchService({
                complete : function(results){
                    var pois = results.detail.pois;
                    that.searchValue = pois
                    // console.log(pois)
                }
            });
        },
    },
    mounted() {
        this.getMyLocation();
    },
}
</script>

<style lang='less' scoped>
    .locationMap{

    }
</style>