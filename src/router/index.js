/*
 * @Author: your name
 * @Date: 2019-10-17 19:05:26
 * @LastEditTime: 2020-12-10 13:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login/login'
import NotFound from '@/pages/errorPage/404'
import Forbidden from '@/pages/errorPage/403'
import Layout from '@/pages/layout/index'
import Home from '@/pages/home/index'
const Order = () => import('@/pages/order-manage')
const FinanceInfo = () => import('@/pages/financeInfo')

Vue.use(Router)

/* 初始路由 */
export default new Router({
    routes: [
        {
            path: '/login',
            component: Login
        }
    ]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
    {
        path: '',
        component: Layout,
        name: 'container',
        redirect: 'home',
        meta: {
            requiresAuth: true,
            name: '首页'
        },
        children: [
            {
                id: 1,
                path: 'home',
                component: Home,
                name: 'home',
                meta: {
                    name: '首页',
                    icon: 'tree'
                }
            },
            {
                path: '/order',
                component: Order,
                name: 'order-manage',
                meta: {
                    name: '订单列表',
                    icon: 'example'
                }
            },
            {
                path: '/goods',
                component: FinanceInfo,
                name: 'FinanceInfo',
                meta: {
                    name: '财务信息',
                    icon: 'user'
                }
            },
        ]
    },
    
    {
        path: '/403',
        component: Forbidden
    },
    {
        path: '*',
        component: NotFound
    }
]
