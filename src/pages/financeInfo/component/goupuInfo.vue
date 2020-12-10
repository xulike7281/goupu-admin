<!--
 * @Author: your name
 * @Date: 2020-12-10 13:20:01
 * @LastEditTime: 2020-12-10 13:43:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/pages/financeInfo/component/goupuInfo.vue
-->
<template>
    <el-card class="box-card goupu-info">
        <div class="info-title">
            我的财务信息
        </div>
        <div class="info-logo">
            <img src="../../../assets/image/sum_logo.png" alt="">
        </div>
        <div class="info-content-warp">
            <div class="info-content">
                <p>开票信息：</p>
                <p>名称：三星（中国）投资有限公司</p>
                <p>纳税人识别号：91110000625911349W</p>
            </div>
            <div class='info-content'>
                <p>开户行信息： </p>
                <p>账号： 122909997410802</p>
                <p>开户行：招商银行天津分行复兴路支行 </p>
            </div>
            <div class="info-content">
                <p>联系地址： </p>
                <p>地址： 北京市朝阳区光华路15号院2号楼10层1001、1002、1003 内15</p>
                <p>电话：010-81006001</p>
            </div>

        </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {

    }
}
</script>
<style lang="scss" scoped>
    .goupu-info{
        flex: 1;
        height: 510px;
        margin-left: 10px;
    }
    .info-logo{
        margin: 74px 0 0 30px;
    }
    .info-logo img{
        width: 130px;
        height: 50px;
    }
    .info-content-warp{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #002800;
        line-height: 20px;
        .info-content{
            margin-top: 25px;
        }
    } 
</style>
