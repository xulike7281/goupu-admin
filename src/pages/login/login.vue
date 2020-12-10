<template>
    <div class="login-container" >
        <div class="login-header">
            <img class="login-logo" src="../../assets/image/logo_big.png">
            <span class="login-title">订单管理系统后台</span>
        </div>
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
            <div class="form-desc">
                <span class="login-desc">
                   用户登录
                </span>
                <span class="forget-password" @click="forgetPasswordDialog = !forgetPasswordDialog">
                   忘记密码
                </span>
            </div>
            <el-form-item prop="username">
                <!-- <span class="svg-container svg-container_login">
                    <svg-icon icon-class="user" />
                </span> -->
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
            </el-form-item>
            <el-form-item prop="password">
                <!-- <span class="svg-container">
                    <svg-icon icon-class="password"></svg-icon>
                </span> -->
                <el-input name="password" :type="pwdType" @keyup.enter.native="login" v-model="loginForm.password" autoComplete="on"
                placeholder="password"></el-input>
                <!-- <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span> -->
            </el-form-item>
            <!-- <el-form-item> -->
                <div class="login-btn row cen-center " type="primary" style="width:100%;"  @click="login">
                立即登录
                </div>
            <!-- </el-form-item> -->
            <!-- <div class="tips">用户为admin的时候，能够看到所有的权限列表，其余账号只能看到部分</div> -->
        </el-form>
        <div>
            <el-dialog
            :visible.sync="forgetPasswordDialog"
            width="400px"
            top="15%"
            custom-class='forget-password-dialog'
            append-to-body
            :show-close='false'
            center>
            <div class="rp-wrap column cen-center">
                <div  class="text-center" style="margin-bottom:27px;">忘记密码</div>
                <div class="text-center">请联系商务重置密码 联系电话13722223678</div>
                <div class="footer-btn row cen-center" @click="forgetPasswordDialog=false">
                    知道了
                </div>
            </div>
                
            </el-dialog>
        </div>
        <div class="login-footer">
            <div>Copyright © 2020</div>
        </div>
    </div>
</template>

<script>
import { login } from '@/api/permission'
export default {
    data() {
        const validateUsername = (rule, value, callback) => {
            if (value.length < 5) {
                callback(new Error('请输入正确的用户名'))
            } else {
                callback()
            }
        }
        const validatePass = (rule, value, callback) => {
            if (value.length < 5) {
                callback(new Error('密码不能小于5位'))
            } else {
                callback()
            }
        }
        return {
            forgetPasswordDialog: false,
            loginForm: {
                username: 'admin',
                password: '123456'
            },
            loginRules: {
                username: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: validateUsername
                    }
                ],
                password: [
                    { required: true, trigger: 'blur', validator: validatePass }
                ]
            },
            loading: false,
            pwdType: 'password'
        }
    },
    methods: {
        showPwd() {
            if (this.pwdType === 'password') {
                this.pwdType = ''
            } else {
                this.pwdType = 'password'
            }
        },
        async login() {
            try {
                let data = await login(this.loginForm)
                let token = data.token
                this.$store.commit('LOGIN_IN', token)
                this.$router.replace('/')
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
$bg: #2d3a4b;
$light_gray: #eee;
$btn_bg:#FF6800;

/* reset element-ui css */
 .forget-password-dialog{
        height: 220px;
        .rp-wrap{
            width: 100%;

        }
        .el-dialog__body{
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-self: center;
            padding-top:0!important;
        }
        .el-dialog__footer{
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-self: center;
        }
        .footer-btn{
            cursor: pointer;
            margin-top: 35px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
            background: $btn_bg;
            width: 220px;
            height: 42px;
        }
    }
.login-container {
   
    .login-header,.login-footer{
        width: 100vw;
        height: 90px;
        opacity: 0.9;
        background: #3E3B39;
    }
    .login-header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .login-logo{
            width: 131px;
            height: 30px;
            margin-left: 160px;
            margin-right: 18px;
        }
        .login-title{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #FFFFFF;
        }
    }
    .login-footer{
        position:absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        div{
            opacity: 0.5;
        }
    }
    .el-input {
        display: inline-block;
        height: 40px;
        width: 90%;
        input {
            background: transparent;
            border: 0px;
            // -webkit-appearance: none;
            // border-radius: 0px;
            // padding: 12px 5px 12px 15px;
            // color: $light_gray;
            // height: 40px;
            // &:-webkit-autofill {
            //     -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
            //     -webkit-text-fill-color: #fff !important;
            // }
        }
    }
    .el-form-item {
        border: 1px solid #686868;
        height: 40px;
        // background: rgba(0, 0, 0, 0.1);
        // border-radius: 5px;
        // color: #454545;
        
    }
    .login-btn{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        background: $btn_bg;
        border-radius: 0;
        border: none;
        height: 42px;
        cursor: pointer;
        margin-top: 40px;
    }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    // background-color: $bg;
    background-image:url('../../assets/image/login_bg.jpg');
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        height: 360px;
        padding: 42px 30px 84px 30px;
        margin: 120px auto;
        opacity: 0.93;
        background: #FBFBFB;
    }
    .form-desc{
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom: 30px;
        .login-desc{
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #333333;
        }
        .forget-password{
            cursor: pointer;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            text-align: right;
        }
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }
    .svg-container {
        padding: 0 0 0 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
        &_login {
            font-size: 20px;
        }
    }
    .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
    .fontcontainer{
        color:#889aa4;
        padding-left:10px;
    }
}
</style>
