/*
 * @Author: your name
 * @Date: 2019-10-17 19:05:26
 * @LastEditTime: 2020-12-10 11:55:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SamSung/src/router/dynamic-router.js
 */
// /*
//  * @Author: your name
//  * @Date: 2019-10-17 19:05:26
//  * @LastEditTime: 2020-12-10 11:46:01
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: /SamSung/src/router/dynamic-router.js
//  */
// /* 订单管理 */
// const Order = () => import('@/pages/order-manage')
// const OrderList = () => import('@/pages/order-manage/order-list')
// const ProductManage = () => import('@/pages/order-manage/product-manage')
// const ProductionList = () =>
//     import('@/pages/order-manage/product-manage/production-list')
// const ReviewManage = () =>
//     import('@/pages/order-manage/product-manage/review-manage')
// const ReturnGoods = () => import('@/pages/order-manage/return-goods')

// /* 产品管理 */
// const Goods = () => import('@/pages/goods-manage')
// const GoodsList = () => import('@/pages/goods-manage/goods-list')
// const GoodsClassify = () => import('@/pages/goods-manage/goods-classify')
// // 权限管理
// const Permission = () => import('@/pages/permission')
// const UserManage = () => import('@/pages/permission/user-manage')
// const RoleManage = () => import('@/pages/permission/role-manage')
// const MenuManage = () => import('@/pages/permission/menu-manage')
// /* 需要权限判断的路由 */
const dynamicRoutes = []

// const dynamicRoutes = [
//     // {
//     //     path: '/order',
//     //     component: Order,
//     //     name: 'order-manage',
//     //     meta: {
//     //         name: '订单列表',
//     //         icon: 'example'
//     //     }
//     // },
//     // {
//     //     path: '/goods',
//     //     component: Goods,
//     //     name: 'goods',
//     //     meta: {
//     //         name: '财务信息',
//     //         icon: 'user'
//     //     }
//     // }
//     // {
//     //     path: '/permission',
//     //     component: Permission,
//     //     name: 'permission',
//     //     meta: {
//     //         name: '权限管理',
//     //         icon: 'table'
//     //     },
//     //     children: [
//     //         {
//     //             path: 'user',
//     //             name: 'user-manage',
//     //             component: UserManage,
//     //             meta: {
//     //                 name: '用户管理',
//     //                 icon: 'table'
//     //             }
//     //         },
//     //         {
//     //             path: 'role',
//     //             name: 'role-manage',
//     //             component: RoleManage,
//     //             meta: {
//     //                 name: '角色管理',
//     //                 icon: 'eye'
//     //             }
//     //         },
//     //         {
//     //             path: 'menu',
//     //             name: 'menu-manage',
//     //             component: MenuManage,
//     //             meta: {
//     //                 name: '菜单管理',
//     //                 icon: 'tree'
//     //             }
//     //         }
//     //     ]
//     // }
// ]

export default dynamicRoutes
