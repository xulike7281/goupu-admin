<template>
    <el-menu
        :collapse="isSidebarNavCollapse"
        background-color="#3E3B39"
        text-color="#fff"
        active-text-color="#fff"
        :default-active="currentMenu"
    >
        <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
        <div class="sw-box row cen-center">商务对接 13722223678</div>
    </el-menu>
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isCollapse: true
        }
    },
    computed: {
        ...mapState(['isSidebarNavCollapse']),
        ...mapState('permission', ['sidebarMenu', 'currentMenu'])
    },
    methods: {},
    components: {
        DynamicMenu
    }
}
</script>
<style lang="scss" scoped>
    .sw-box{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #CFC5BF;
        position: absolute;
        bottom: 0;
        left: 0px;
        width: 200px;
        height: 48px;
        background-color: #4E4B49;
    }
</style>
