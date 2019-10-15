<template>
    <div class="buyTicket">
        <Head></Head>
        <div class="buyTicketContent">
            <van-cell-group>
                <van-field v-model="form.bookTime" required label="时间" right-icon="arrow" @click-right-icon="$toast('question')" />
                <van-field v-model="form.bookItem" required label="项目" right-icon="arrow" @click-right-icon="$toast('question')" />
                <van-field v-model="form.bookTony" required label="发型师" right-icon="arrow" @click-right-icon="$toast('question')" />
                <van-cell title="人数">
                    <template slot="default">
                        <van-stepper v-model="form.bookNum" />
                    </template>
                </van-cell>
                <van-field v-model="form.bookPhone" required label="预留手机号" placeholder="请输入手机号"/>
                <van-field v-model="form.bookRemark" required label="备注" placeholder="20字以内"/>
            </van-cell-group>
        </div>
        <!-- 立即购票 -->
        <van-submit-bar button-text="立即购票" @submit="buyNow" />
    </div>
</template>

<script>
export default {
    name: 'buyTicket',
    data() { 
        return {
            form:{
                bookTime:'',
                bookItem:'',
                bookTony:'',
                bookNum:1,
                bookPhone:'',
                bookRemark:'',
            },
        }
    },
    methods:{
        buyNow(){
            
        }
    }
}
</script>

<style lang='less' scoped>
    .buyTicket{

    }
</style>