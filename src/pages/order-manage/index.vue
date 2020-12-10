<!--
 * @Author: your name
 * @Date: 2019-10-17 19:05:26
 * @LastEditTime: 2020-12-10 13:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/pages/order-manage/index.vue
-->
<template>
     <el-card class="box-card order-container" style="margin-right: 10px;">
        <div class="row cen-space search-box">
            <div class='list-text'>
                <span>订单列表</span>
            </div>
            <div>
                <span class="time-text">筛选时间</span>
                <el-date-picker
                    v-model="timeArray"
                    size="small"
                    type="daterange"
                    align="right"
                    unlink-panels
                    clearable
                    @change = 'timeChange'
                    value-format='yyyy-MM-dd'
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
                </el-date-picker>
            </div>

        </div>
        <order-list></order-list>
    </el-card>

</template>

<script>
import OrderList from './component/order-list.vue'
export default {
    components: {
        OrderList
    },
    data() {
        return {
            timeArray: null,
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        picker.$emit('pick', [start, end])
                    }
                }]
            }
        }
    },
    mounted() {

    },
    methods: {
        timeChange(val) {
            console.log('val: ', val)
        }
    }
}
</script>
<style lang="scss" scoped>
    .order-container{
        width: 100%;
        height: 100%;
        .search-box{
            // height: 73px;
            margin-bottom: 20px;
        }
        // background-color: red;
        .list-text{
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #666666;
        }
        .time-text{
            margin-right: 10px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666666;
        }
    }
</style>
