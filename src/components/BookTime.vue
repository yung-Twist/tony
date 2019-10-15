<template>
<div class="bookTime">
    <div v-cloak id="popup" @click="popupHide">
        <div class="overlay"></div>
        <div class="content">
            <section class="srv-time-selector" v-show="switchShow">
                <div class="bar bar-1">
                    <h1>选择服务时间</h1>
                    <img width="14" src="../assets/images/delete_weici2_icon.png" />
                </div>
                <div class="bd">
                    <div class="header">
                        <div class="data-picker">
                            <div class="wrapper">
                                <button v-for="(date, index) in dates.nowMonth" :id="'scroll-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNow(index, $event)">
                                    {{date.week}} {{date.month}}/{{date.day}}
                                    <span>{{date.appointment ? '可预约' : '暂不可约'}}</span>
                                </button>
                                <button v-for="(date, index) in dates.nextMonth" :id="'scroll-next-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNext(index, $event)">
                                    {{date.week}} {{date.month}}/{{date.day}}
                                    <span>{{date.appointment ? '可预约' : '暂不可约'}}</span>
                                </button>
                            </div>
                        </div>
                        <button class="cal" @click="tableShow">
                            <img width="16" src="../assets/images/rili_weici2_icon@2x.png" alt="" />
                            <span>30天</span>
                        </button>
                    </div>
                    <!-- <div :class="['no-sel', {'not-chose-time': isChoseTime}]" @click="notChoseTime" v-show="isChoseTimeShow">
                        <p>暂不选择服务时间</p>
                        <p>之后可以在我的订单页面选择</p>
                    </div> -->
                    <div class="hours">
                        <div class="wrapper" v-for="date in dates.nowMonth" v-if="date.current && date.appointment">
                            <div :class="{'chose-time': !isChoseTime}" v-if="isFirstDay === 0">
                                <button :class="['hour-this', {'not-can-use': (key + 20)/2 <= currentHours + 0.5}]" v-for="(hour, key) in date.hours" @click="timeChose(key, $event)">{{hour.hour}}</button>
                            </div>
                            <div :class="{'chose-time': !isChoseTime}" v-else>
                                <button class="hour-this" v-for="(hour, key) in date.hours" @click="timeChose(key, $event)">{{hour.hour}}</button>
                            </div>
                        </div>
                        <div class="wrapper" v-else-if="date.current && !date.appointment">
                            <div class="tips">
                                <img class="null-tips" src="../assets/images/baoqian_weici2_icon.png" alt="" />
                                <p>抱歉，今天的服务暂时不能预约哦~</p>
                            </div>
                        </div>
                        <div class="wrapper" v-for="date in dates.nextMonth" v-if="date.current && date.appointment" >
                            <div :class="{'chose-time': !isChoseTime}">
                                <button class="hour-this" v-for="hour in date.hours" @click="timeChose(key, $event)" :key="hour">{{hour.hour}}</button>
                            </div>
                        </div>
                        <div class="wrapper" v-else-if="date.current && !date.appointment">
                            <div class="tips">
                                <img class="null-tips" src="../assets/images/baoqian_weici2_icon.png" alt="" />
                                <p>抱歉，今天的服务暂时不能预约哦~</p>
                            </div>
                        </div>
                    </div>
                    <div class="out">
                        <button class="submit" @click="submitFunc">确定</button>
                    </div>
                </div>
            </section>

            <section class="srv-time-selector" v-show="!switchShow">
                <div class="bar">
                    <img width="8" src="../assets/images/fanhui_weici2_icon.png" @click="tableHide" />
                    <h1>选择服务时间</h1>
                </div>
                <div class="bd">
                    <section class="days-component">
                        <div class="weekdays">
                            <div class="weekday">日</div>
                            <div class="weekday">一</div>
                            <div class="weekday">二</div>
                            <div class="weekday">三</div>
                            <div class="weekday">四</div>
                            <div class="weekday">五</div>
                            <div class="weekday">六</div>
                        </div>
                        <div class="days-body">
                            <div>
                                <div class="month">{{currentYears}}年{{currentMonth}}月</div>
                                <div class="days">
                                    <div class="day" v-for="day in nullDay">{{day}}</div>
                                    <div class="day" v-for="(date, index) in dates.nowMonth" :id="'scroll-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNow(index, $event)">
                                        <font v-show="index == 0">今天</font>
                                        <span>{{date.appointment ? '' : '暂不可约'}}</span>
                                        <a :href="'#scroll-' + index">{{date.day}}</a>
                                    </div>
                                </div>
                                <div class="month">{{currentYears}}年{{currentMonth + 1}}月</div>
                                <div class="days">
                                    <div class="day" v-for="day in nextNullDay">{{day}}</div>
                                    <div class="day" v-for="(date, index) in dates.nextMonth" :id="'scroll-next-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNext(index, $event)">
                                        <span>{{date.appointment ? '' : '暂不可约'}}</span>
                                        <a :href="'#scroll-next-' + index">{{date.day}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'bookTime',
    data() {
        return {
            switchShow: true,
            currentMonth: null,
            currentHours: null,
            isFirstDay: 0,
            popupShow: false,
            isChoseTime: true,
            isChoseTimeShow: true,
            nextProtoWeek: null,
            nullDay: [],
            nextNullDay: [],
            dates: {
                nowMonth: [],
                nextMonth: []
            }
        }
    },
    methods: {
        selectedNow(index, event) {
            console.log(this.dates)
            for (let date in this.dates.nowMonth) {
                this.dates.nowMonth[date].current = false;
            }
            for (let date in this.dates.nextMonth) {
                this.dates.nextMonth[date].current = false;

            };

            if (!this.dates.nowMonth[index].appointment) {
                this.isChoseTimeShow = false;
            } else {
                this.isChoseTimeShow = true;
                this.isChoseTime = true;
            }

            this.isFirstDay = index;
            console.log(this.isFirstDay);
            this.tableHide();
            this.dates.nowMonth[index].current = true;

        },
        selectedNext(index, event) {

            for (let date in this.dates.nextMonth) {
                this.dates.nextMonth[date].current = false;

            }
            for (let date in this.dates.nowMonth) {
                this.dates.nowMonth[date].current = false;

            };

            if (!this.dates.nextMonth[index].appointment) {
                this.isChoseTimeShow = false;
            } else {
                this.isChoseTimeShow = true;
                this.isChoseTime = true;
            }

            this.isChoseTime = true;
            this.tableHide();

            this.dates.nextMonth[index].current = true;

        },

        tableShow() {

            this.switchShow = false;

        },

        tableHide() {

            this.switchShow = true;

        },

        timeChose(key, event) {
            this.isChoseTime = false;
            $(event.target).siblings().removeClass('chosed');
            $(event.target).addClass('chosed');

        },

        notChoseTime: function () {
            this.isChoseTime = true;
        },

        popupHide: function () {
            this.popupShow = false;
        },

        // submit
        submitFunc: function () {
            var time, choseH, subInfo;

            for (ts in this.dates.nowMonth) {
                if (this.dates.nowMonth[ts].current == true) {
                    time = this.dates.nowMonth[ts];
                }
            }
            for (tc in this.dates.nextMonth) {
                if (this.dates.nextMonth[tc].current == true) {
                    time = this.dates.nextMonth[tc];
                }
            }

            var choseHours = $('.hour-this');
            var noSel = $('.no-sel');

            if (noSel.hasClass('not-chose-time')) {
                choseH = null;
            } else {

                for (var h = 0; h < choseHours.length; h++) {
                    if (choseHours.eq(h).hasClass('chosed')) {
                        choseH = choseHours.eq(h).text();
                    }
                }

            }

            subInfo = {
                "day": time,
                "hour": choseH
            }
            console.log(subInfo);
        }
    },

    created: function () {

        var totalDays = 30,
            date = new Date(),
            currentYears = date.getFullYear(),
            week = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六'),
            currentMonth = date.getMonth() + 1,
            currentDay = date.getDate(),
            protoWeek = date.getDay(),
            currentHours = date.getHours(),
            hours = [{
                    'hour': '10:00'
                }, {
                    'hour': '10:30'
                }, {
                    'hour': '11:00'
                }, {
                    'hour': '11:30'
                },
                {
                    'hour': '12:00'
                }, {
                    'hour': '12:30'
                }, {
                    'hour': '13:00'
                }, {
                    'hour': '13:30'
                },
                {
                    'hour': '14:00'
                }, {
                    'hour': '14:30'
                }, {
                    'hour': '15:00'
                }, {
                    'hour': '15:30'
                },
                {
                    'hour': '16:00'
                }, {
                    'hour': '16:30'
                }, {
                    'hour': '17:00'
                }, {
                    'hour': '17:30'
                },
                {
                    'hour': '18:00'
                }, {
                    'hour': '18:30'
                }
            ];

        this.currentYears = currentYears;
        this.currentMonth = currentMonth;
        this.currentDay = currentDay;
        this.currentHours = currentHours;
        console.log(this.currentDay);

        for (var i = 0; i < totalDays; i++) {

            var month = date.getMonth() + 1,
                day = date.getDate(),
                proteWeek = date.getDay(),
                timestamp = date.getTime(),
                appointment = true;

            if (proteWeek == 0 || proteWeek == 6) {
                appointment = false;
            }

            var d = {
                'timestamp': timestamp,
                'appointment': appointment,
                'month': month,
                'day': day,
                'proteWeek': proteWeek,
                'week': week[proteWeek],
                'hours': hours,
                'current': false
            };

            if (month == currentMonth) {
                this.dates.nowMonth.push(d);
            } else {
                this.dates.nextMonth.push(d);
            }

            date.setDate(date.getDate() + 1);
        }

        this.dates.nowMonth[0].current = true;
        this.nextProtoWeek = this.dates.nextMonth[0].proteWeek;
        console.log(this.nextProtoWeek);
        console.log(this.dates);

        for (var j = 0; j < protoWeek; j++) {

            this.nullDay.push("");

        }

        for (var k = 0; k < this.nextProtoWeek; k++) {

            this.nextNullDay.push("");

        }
    }
}
</script>

<style lang="less" scoped>
[v-cloak] {
    display: none;
}

ul,
ol {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a:link,
a:visited,
a:hover,
a:active {
    color: #666;
    text-decoration: none;
}

p {
    margin: 0;
}

button,
input {
    -webkit-appearance: none;
    background: none;
    border: none;
    outline: none;
}

#popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .2);
    }

    .content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;

        .srv-time-selector {
            .bar {
                h1 {
                    text-align: center;
                    font-weight: normal;
                    margin: 0;
                    font-size: 14px;
                    color: #222;
                    height: 42px;
                    line-height: 42px;
                    border-bottom: 1px solid #f0f0f0;
                }

                position:relative;

                img {
                    display: inline-block;
                    float: left;
                    margin-top: 14px;
                    margin-left: 10px;
                }
            }

            .bar-1 {
                img {
                    position: absolute;
                    right: 10px;
                    top: 0;
                }
            }

            .bd {
                .header {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    width: 100%;
                    overflow: hidden;
                    background: #f7f7f7;

                    .data-picker {
                        overflow-x: auto;
                        overflow-y: visible;
                        -webkit-box-flex: 1;
                        -moz-flex: 1;
                        flex: 1;

                        .wrapper {
                            white-space: nowrap;

                            button {
                                position: relative;
                                overflow: hidden;
                                border-bottom: 2px solid #f7f7f7;
                                margin-right: 1rem;
                                height: 50px;
                                text-align: center;

                                span {
                                    display: block;
                                    color: #999;
                                    font-size: 12px;
                                }
                            }

                            .current {
                                color: #68c9d0;

                                span {
                                    color: #68c9d0;
                                }

                                &:after {
                                    position: absolute;
                                    bottom: 0;
                                    content: '';
                                    width: 82%;
                                    display: block;
                                    height: 2px;
                                    background: #68c9d0;
                                }
                            }
                        }
                    }

                    .cal {
                        flex: 0 0 80px;
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 80px;
                        width: 80px;
                        border-left: 1px solid #e6e6e6;
                        color: #999;

                        img {
                            display: block;
                            margin: 0 auto;
                        }
                    }
                }

                .no-sel {
                    margin: 10px;
                    padding: 5px 0;
                    text-align: center;
                    border: 1px solid #979797;
                    color: #979797;

                    .not-chose-time {
                        border: 1px solid #68c9d0;
                        color: #68c9d0;
                        background: url('../assets/images/dagou_weici2_icon.png') no-repeat right bottom;
                    }

                    p:first-child {
                        font-weight: bold;
                        font-size: 14px;
                    }

                    p {
                        font-size: 12px;
                    }
                }

                .hours {
                    margin: 10px 10px 0;

                    .wrapper {
                        height: 184px;
                        overflow: auto;

                        .tips {
                            text-align: center;
                        }

                        .null-tips {
                            margin: 20px 0 10px;
                        }

                        div {
                            button {
                                width: 24.25%;
                                margin-right: 1%;
                                margin-bottom: 3px;
                                border: 1px solid #68c9d0;
                                color: #999;
                                padding: 10px 0;

                                &:nth-child(4n) {
                                    margin-right: 0;
                                }
                            }

                            .not-can-use {
                                background: #f7f7f7;
                                border: 1px solid #979797;
                                pointer-events: none;
                            }
                        }

                        .chose-time {
                            .chosed {
                                background: url('../assets/images/dagou_weici2_icon.png') no-repeat right bottom;
                            }
                        }
                    }
                }

                .out {
                    border-top: 1px solid #f0f0f0;
                    padding: 5px 10px;

                    .submit {
                        width: 100%;
                        background: #68c9d0;
                        vertical-align: middle;
                        height: 42px;
                        color: #fff;
                        font-size: 16px;
                    }
                }

                .days-component {
                    .weekdays {
                        overflow: hidden;
                        background: #f7f7f7;
                        height: 52px;
                        line-height: 52px;

                        .weekday {
                            float: left;
                            width: 14%;
                            text-align: center;
                            color: #333;
                        }
                    }

                    .days-body {
                        color: #333;

                        .month {
                            text-align: center;
                            border-top: 1px solid #e6e6e6;
                            border-bottom: 1px solid #e6e6e6;
                            height: 42px;
                            line-height: 42px;
                        }

                        .days {
                            overflow: hidden;
                            padding: 10px 0;
                        }

                        .day {
                            position: relative;
                            float: left;
                            width: 14%;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;

                            span,
                            font {
                                position: absolute;
                                bottom: 0;
                                left: 50%;
                                margin-left: -16px;
                                font-size: 8px;
                                color: #999;
                                line-height: 1;
                                display: block;
                            }

                            font {
                                top: 0;
                                color: red;
                                margin-left: -8px;
                            }

                            a {
                                display: block;
                                width: 30px;
                                margin: 0 auto;
                            }

                            .current a {
                                background: #69c9d1;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
