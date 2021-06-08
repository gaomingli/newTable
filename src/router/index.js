import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Table from '@/components/table'
import Form from '@/components/form'
import Tree from '@/components/tree'
import Pagnation from '@/components/pagnation'
import Output from '@/components/output'
import Overview from '@/components/overview'
import Others from '@/components/others'
import Total from '@/components/total'
import Actived from '@/views/actived'
import Login from '@/views/login'
import EchartLine from '@/components/echartLine'

// const Login = () =>import ('@/views/login');

Vue.use(Router)


export default new Router({
    routes: [{
            path: '/login',
            name: 'Login',
            // component: resolve =>require(['@/views/login'],resolve)
            component: Login
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
                    path: '/',
                    redirect: '/table',
                },
                {
                    path: '/table',
                    name: 'Table',
                    component: Table
                },
                {
                    path: '/form',
                    name: 'Form',
                    component: Form
                },
                {
                    path: '/tree',
                    name: 'Tree',
                    component: Tree
                },
                {
                    path: '/pagnation',
                    name: 'Pagnation',
                    component: Pagnation
                },
                {
                    path: '/output',
                    name: 'Output',
                    component: Output
                },
                {
                    path: '/overview',
                    name: 'Overview',
                    component: Overview
                },
                {
                    path: '/others',
                    name: 'Others',
                    component: Others
                },
                {
                    path: '/total',
                    name: 'Total',
                    component: Total
                },
                {
                    path: '/actived',
                    name: 'Actived',
                    component: Actived
                },
                {
                    path: '/echartline',
                    name: 'EchartLine',
                    component: EchartLine
                }
            ]
        }
    ]
})