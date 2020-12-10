<!--
 * @Author: your name
 * @Date: 2019-10-17 19:05:26
 * @LastEditTime: 2020-12-10 13:24:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/pages/financeInfo/index.vue
-->
<template>
    <div class="row">
       <myInfo></myInfo>
       <gpInfo></gpInfo>
    </div>
</template>

<script>
import gpInfo from './component/goupuInfo'
import myInfo from './component/myInfo'

export default {
    components: {
        gpInfo,
        myInfo
    },
    data() {
        return {}
    },
    mounted() {

    }
}
</script>
<style lang="scss" >
    .info-title{
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #666666;
    }
</style>
