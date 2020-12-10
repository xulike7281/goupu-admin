
<template>
    <div class="card-table-wrap">
       <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span class="ft14 c-666">最近一周订单列表</span>
            <div class="row cen-center all-btn c-333 ft12"   @click="clickAll">查看全部</div>
        </div>
         <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>

        </el-card>
    </div>
</template>

<script>
export default {
    name: 'TableList',
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        clickAll() {
            this.tableData = this.tableData.concat(this.tableData)
        }
    }
}
</script>
<style lang="scss" scoped>
    .card-table-wrap{
        width:1140px;
        margin-top: 10px;
        .all-btn{
            width: 90px;
            height: 30px;
            cursor: pointer;
            border: 1px solid #E0E2E7;
            border-radius: 4px;
            float: right;
        }
    }
</style>
