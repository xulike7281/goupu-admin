<!--
 * @Author: your name
 * @Date: 2019-10-17 19:05:26
 * @LastEditTime: 2020-12-10 13:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/pages/order-manage/order-list/index.vue
-->
 <template>
  <div class="order-list">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="700"
      >
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
    <div class="pagination-box row cen-space">
      <el-button type="primary" icon="el-icon-download" size='small'>导出数据</el-button>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next,sizes"
        :total="1000">
      </el-pagination>
    </div>
  </div>

  </template>

<script>
export default {
    data() {
        return {
            currentPage: 2,
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
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        }
    }
}
</script>
<style lang="scss" scoped>
  .pagination-box{
    margin-top: 35px;
  }
</style>