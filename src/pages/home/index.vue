
<template>
  <div class="home-content column">
      <div class="row">
        <div class="home-left ">
        <div class="row wrap">
            <el-card class="box-card" style="margin-right: 10px;">
              <div class='c-666 bold ft14'>昨日单量</div>
              <div class="row cen-space w100 order-info-box" >
                  <div class="column cen-center">
                    <span class="ft13 c-AAA">订单数量</span>
                    <span class="ft30 c-FF6800 mt5">5247</span>
                  </div>
                  <div class="column cen-center">
                    <span class="ft13 c-AAA">订单金额</span>
                    <span class="ft30 c-FF6800 mt5"><span class="ft18">¥</span> 5247</span>
                  </div>
              </div>
            </el-card>
            <el-card class="box-card">
              <div class='c-666 bold ft14'>
                  昨日佣金
              </div>
              <div class="row cen-space w100 order-info-box" >
                  <div class="column cen-center">
                    <span class="ft13 c-AAA">分佣比例</span>
                    <span class="ft30 c-FF6800 mt5">10:3</span>
                  </div>
                  <div class="column cen-center">
                    <span class="ft13 c-AAA">佣金分成</span>
                    <span class="ft30 c-FF6800 mt5"> <span class="ft18">¥</span> 1000</span>
                  </div>
              </div>
            </el-card>
        </div>
            <el-card class="box-card card-charts">
              <div class="row cen-space">
                <span class="ft14 c-666 bold">收益趋势</span>
                <el-radio-group v-model="radio" @change='changeMonthOrYear' size="mini">
                  <el-radio-button label="month">月</el-radio-button>
                  <el-radio-button label="year">年</el-radio-button>

                </el-radio-group>
              </div>

            <info-line></info-line>
            </el-card>
        </div>
        <div class="home-right">
        <el-card class="box-card card-userinfo">
            <div class="ft14 c-666 bold">
                用户信息
            </div>
            <div class="user-info-box mt30">
              <div class="row cen-start">
                <img src="../../assets/image/user-icon.png" alt="">
                <div class="ml10">
                  <div class="row cen-start">
                    <span class="ft14 c-333">皮特吴</span>
                    <img class="admin-icon" src="../../assets/image/admin-icon.png" alt="">
                  </div>
                  <div>
                    <span class="ft12 c-333">137****2622</span>
                    <span class="c-324CD2 ft12 ml20 modifly-pass" @click="modiflyPasswordDialog = true">修改密码</span>
                  </div>
                </div>
              </div>
              <div class="ml20 mt30">
                <div>
                  <span class="ft12 c-666">账号状态：</span><span class="ft12 c-151515">正常</span>
                </div>
                <div>
                  <span class="ft12 c-666">登录时间：</span><span class="ft12 c-151515">2020/11/30 15:32</span>

                </div>
              </div>
            </div>
            <div class="login-out-wrap row cen-center" >
              <div class="login-out row cen-center ft12" @click="loginOut">退出登录</div>
            </div>
        </el-card>
        <el-card class="box-card card-month">
            <div class="ft14 c-666 bold">
                当月数据
            </div>
            <div class="row cen-space month-box">
                <div class='column cen-center'>
                  <span class='ft13 c-AAA'>订单数量</span>
                  <span class='ft18 c-FF6800 mt10'>5247</span>
                </div>
                 <div class='column cen-center'>
                  <span class='ft13 c-AAA'>订单金额</span>
                  <span class='ft18 c-FF6800 mt10'><span class="ft12">¥</span> 62230</span>
                </div>
                 <div class='column cen-center'>
                  <span class='ft13 c-AAA'>佣金分成</span>
                  <span class='ft18 c-FF6800 mt10'><span class="ft12">¥</span> 3000</span>
                </div>
            </div>
        </el-card>
        </div>
      </div>

    <TableList></TableList>
    <div>
       <el-dialog
            :visible.sync="modiflyPasswordDialog"
            width="400px"
            top="10%"
            custom-class='modifly-password-dialog column cen-start'
            append-to-body
            :show-close='false'
            center
            title='修改密码'
            >
                <!-- <div  class="text-center ft18 c-333 bold" ></div> -->
                <div class="column cen-center">
                  <el-input class="el-input-pass" placeholder="新密码"></el-input>
                  <el-input class="el-input-pass mt20" placeholder="确认密码"></el-input>
                </div>
                <div class="footer-btn row cen-center " @click="modiflyPassword">
                    确认修改
                </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import TableList from './component/table-list'

import infoLine from '@/components/echarts/line'
export default {
    components: {
        TableList,
        infoLine
    },
    data() {
        return {
            radio: 'month',
            modiflyPasswordDialog: false,
            timeLineOption: {},
            timeLoading: false
        }
    },
    mounted() {
        this.setLineOption()
    },
    methods: {
        changeMonthOrYear(val) {
            console.log('val: ', val)
        },
        modiflyPassword() {

        },
        loginOut() {
            this.$store.commit('LOGIN_OUT')
            /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
            window.location.reload()
        },
        setLineOption() {
            this.timeLineOption = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    }

}
</script>
<style lang="scss" >
$btn_bg:#FF6800;
.home-content{
    // width: 100%;
  .home-left{
    .box-card{
      width: 395px;
      height: 180px;
    }
    .card-charts{
       width: 800px;
      height: 320px;
      margin-top: 10px;
    }
  }
  .home-right{
    margin-left: 20px;
    .card-userinfo{
      width: 320px;
      height: 280px;
      .user-info-box{
        img{
          width: 48px;
          height: 48px;
          margin-left: 15px;
        }
        .admin-icon{
          width: 38px;
          height: 14px;
        }
      }
      .modifly-pass{
        cursor: pointer;
      }
    }
    .card-month{
      width: 320px;
      height: 220px;
      margin-top: 10px;
    }
  }
  .order-info-box{
    padding: 35px 50px 0 74px
  }
  .login-out-wrap{
    margin-top:40px;
    .login-out{
      cursor: pointer;
      border: 1px solid #D6D7DC;
      width: 110px;
      height: 30px;
      color: #616475;
    }
  }
  .month-box{
    margin-top: 50px;
    padding:0 10px;
    box-sizing: border-box;
  }
}
 .modifly-password-dialog{
   .el-dialog__header{
     padding-bottom: 0!important;
     .el-dialog__title{
     }
   }

    .el-dialog__body{
            // display: flex;
            // flex-direction: column;
            // justify-content:center;
            // align-self: center;
            // padding-top:0!important;
        }

    .el-input-pass{
      width: 300px;
    }
    .footer-btn{
      cursor: pointer;
      margin-top: 30px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      text-align: center;
      background: $btn_bg;
      width: 300px;
      height: 42px;
  }
}
</style>
