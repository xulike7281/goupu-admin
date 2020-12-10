<!--
 * @Author: your name
 * @Date: 2019-10-17 19:05:26
 * @LastEditTime: 2020-12-10 15:21:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/pages/layout/component/main-content/index.vue
-->
<template>
    <div>
    <div class="tip-wrap row cen-center">
         公告：尊敬的用户，我们将在2020/12/15凌晨进行V2.0版本更新，届时服务器将会重启，如有问题请联系客服。
    </div>
    <div class="main-container">
       
        <!-- <TopAside/> -->
        <Content/>
    </div>
</div>
   
</template>

<script>
// import TopAside from './top-aside'
import Content from './content'
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components: {
        // TopAside,
        Content
    }
}
</script>
<style lang="scss" scoped>
.tip-wrap{
    box-sizing: border-box;
    padding-left: 200px;
    width: 100%;
    height: 40px;
    background: #FFFBF3;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FBA02D;
    // position: absolute;
    // top:0;
    // left: 0;
}
</style>