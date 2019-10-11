<template>
<div class="location">
    <Head rightworld="完成" @onClickRight="onClickRight"></Head>
    <div id="container" style="width:100vw;height:50vh;"></div>
</div>
</template>

<script>
export default {
    name: 'location',
    data() {
        return {
            longitude:24.576163,//经度
            latitude:118.095130,//纬度
            city:''
        }
    },
    methods:{
        onClickRight(){
            console.log('点击了完成')
        },
        //定位获得当前位置信息
        getMyLocation() {
            var geolocation = new qq.maps.Geolocation("JYLBZ-ZGQ3U-5JFV5-4WUDC-OK676-JVB3E", "建材-小程序");
            geolocation.getIpLocation(this.showPosition, this.showErr);
        },
        showPosition(position) {
            console.log(position);
            this.latitude = position.lat;
            this.longitude = position.lng;
            this.city = position.city;
            this.setMap();
        },
        showErr() {
            console.log("定位失败");
            this.getMyLocation();//定位失败再请求定位，测试使用
        },
        setMap() {
            //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
            //设置地图中心点
            var myLatlng = new qq.maps.LatLng(this.longitude,this.latitude);
            //定义工厂模式函数
            var myOptions = {
                zoom: 10,               //设置地图缩放级别
                center: myLatlng,    //设置中心点样式
                mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
            }
            // //获取dom元素添加地图信息
            var map = new qq.maps.Map(document.getElementById("container"), myOptions);
            //给定位的位置添加图片标注
            var marker = new qq.maps.Marker({
                position: myLatlng,
                map: map
            });
            
            //给定位的位置添加文本标注
            var marker = new qq.maps.Label({
                position: myLatlng,
                map: map,
                content:'这是我当前的位置，偏差有点大，哈哈'
            });
        },
        // init() {
        //     //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
        //     //设置地图中心点
        //     var myLatlng = new qq.maps.LatLng(this.longitude,this.latitude);
        //     //定义工厂模式函数
        //     var myOptions = {
        //         zoom: 10,               //设置地图缩放级别
        //         center: myLatlng,      //设置中心点样式
        //         mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
        //     }
        //     //获取dom元素添加地图信息
        //     var map = new qq.maps.Map(document.getElementById("container"), myOptions);
        //     //给地图添加点击事件
        //     //并获取鼠标点击的经纬度
        //     qq.maps.event.addListener(map, 'click', function(event) {
        //         this.longitude = event.latLng.getLat();
        //         this.latitude = event.latLng.getLng();
        //         alert("经度:"+this.longitude+","+"纬度:"+this.latitude);
        //     });
        //     // 地图标注
        //     var marker = new qq.maps.Marker({
        //         position: myLatlng ,
        //         map: map
        //     });
        // }
    },
    mounted() {
        this.getMyLocation();
    },
}
</script>

<style lang="less" scoped>
.location {}
</style>
