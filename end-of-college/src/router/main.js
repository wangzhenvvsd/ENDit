import Vue from 'vue'
import VueRouter from 'vue-router'
import ClassPage from '@/views/ClassPage'
import HomePage from '@/views/HomePage'
import InfoPage from '@/views/InfoPage'
import MyPage from '@/views/MyPage'

Vue.use(VueRouter)



const router = new VueRouter({
    routes:[
        {
            path:"/ClassPage",
            component:ClassPage
        },
        {
            path:"/",
            component:HomePage
        },
        {
            path:"/InfoPage",
            component:InfoPage
        },
        {
            path:"/MyPage",
            component:MyPage
        },
    ]
})

export default router