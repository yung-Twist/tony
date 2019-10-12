<template>
    <div class="homeSearchPage">
        <div class="homeSearchPageHead">
            <van-row>
                <div class="homeSearchPageHeadWrap">
                    <van-col :span="leftSpan" >
                        <div class="homeSearchPageHeadLeft" v-if="showSearchStatue">
                            <van-icon name="arrow-left" size="1.5rem" @click="onCancel"/>
                            <van-dropdown-menu style="background-color: none;">
                                <van-dropdown-item v-model="searchType" :options="columns" />
                            </van-dropdown-menu>
                        </div>
                    </van-col>
                    <van-col :span="rightSpan">
                        <van-search @focus="showStatus" @input="inputchange" @blur="blurInput" @clear="clearInput" title-class="test" v-model="searchKeyword" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" background="none"/>
                    </van-col>
                    <!-- 搜索弹出列表 -->
                    <div class="searchResultList" v-if="showSearchResultList">
                        <div class="searchResultListItem">
                            <van-cell :icon="searchType == 0 ? 'shop-o':(searchType == 1 ? 'contact':'search')" title="新美亚新趋势" value="65km" size="large" label="集美软件园" />
                        </div>
                    </div>
                </div>
            </van-row>

        </div>
        <div class="homeSearchPageContent" v-if="showSearchContent">
            <div class="searchHistory">
                <div class="searchHistoryHead">
                    <h2>历史搜索</h2>
                    <van-icon name="delete" color="#1989fa" size="1.4rem"/>
                </div>
                <div class="searchHistoryList">
                    <van-grid :column-num="4" :gutter="10">
                        <van-grid-item v-for="(item,index) in searchHistoryList" :key="index" :text="item" />
                    </van-grid>
                </div>
            </div>
            <div class="searchHot">
                <h2>热门搜索</h2>
                <div class="searchHotList">
                    <van-grid :column-num="4" :gutter="10">
                        <van-grid-item v-for="(item,index) in searchHistoryList" :key="index" :text="item" />
                    </van-grid>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeSearchPage',
    data() { 
        return {
            showPicker:false,
            searchType:0,
            columns: [
                { text: '商品', value: 0 },
                { text: '师傅', value: 1 },
                { text: '分类', value: 2 }
            ],
            searchKeyword:'',
            leftSpan:0,
            rightSpan:24,
            showSearchStatue:false,
            searchHistoryList:['招工','招工','招工','招工','招工','招工','招工'],
            showSearchResultList:false,
            showSearchContent:true
        }
    },
    methods:{
        onChange(){

        },
        onConfirm(value){
            this.searchType = value;
            this.showPicker = false
        },
        onSearch(){

        },
        onCancel(){
            this.$router.go(-1)
            this.showSearchStatue = false
            this.rightSpan = 24
            this.leftSpan = 0
        },
        showStatus(){
            this.showSearchStatue = true
            this.rightSpan = 18
            this.leftSpan = 6
            // console.log(123)
        },
        // 输入时的chang事件
        inputchange(){
            this.showSearchResultList = true;
            this.showSearchContent = false;
        },
        // 失去焦点
        blurInput(){
            this.showSearchResultList = false;
            this.showSearchContent = true
        },
        // 清除输入内容
        clearInput(){
            this.showSearchContent = true;
            this.showSearchResultList = false;
        }
    }
}
</script>

<style lang='less' scoped>
@import url('../../../style/base.less');
    .homeSearchPage{
        background-color: #fff;
        .homeSearchPageHeadWrap{
            position: relative;
            height: 10vh;
            border-bottom:@comborder;
            .homeSearchPageHeadLeft{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                
            }
            .searchResultList{
                top: 10vh;
                width: 100%;
                position: absolute;
                z-index: 999;
                .searchResultListItem{
                    border-bottom: @comborder;
                }
            }
        }
        .homeSearchPageContent{
            .searchHistory{
                padding:.5rem;
                border-bottom:@comborder;
                .searchHistoryHead{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                .searchHistoryList{
                    margin-top: .5rem;
                }
            }
            .searchHot{
                padding:.5rem;
                .searchHotList{
                    margin-top: .5rem;
                }
            }
        }
    }
</style>
<style>
    .van-dropdown-menu{
        background-color: none;
        /* border: 1px solid #666; */
    }
</style>