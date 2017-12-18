import index from '../pages/index/index.vue';
import login from '../pages/sx_login/login.vue';
import register from '../pages/sx_login/register.vue';
import entry from '../pages/sx_main/entry/entry.vue';
import grid from '../pages/sx_main/grid/grid.vue';
import publicService from '../pages/sx_main/public_server/public_service.vue';
import activity from '../pages/sx_main/public_server/activity/activity.vue';
import entryActivity from '../pages/sx_main/entry/entryactivity.vue';
import registration from '../pages/sx_main/entry/registration.vue';
import management from '../pages/sx_main/entry/management.vue';
let routes = [
    {
        path: '/',
        redirect: 'index/publicService/activity'
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children:[
            {
                name:'entry',
                path:'entry',
                component: entry,
                children: [
                    {
                        name: 'entryActivity',
                        path: 'entryActivity/:id',
                        component: entryActivity,
                        children:[
                            {
                                name: 'registration',
                                path: 'registration',
                                component: registration
                            },
                            {
                                name: 'management',
                                path: 'management',
                                component: management
                            }
                        ]
                    }
                ]
            },
            {
                name:'grid',
                path: 'grid',
                component: grid
            },
            {
                name:'publicService',
                path: 'publicService',
                component: publicService,
                children:[
                    {
                        name: 'activity',
                        path: 'activity/:id',
                        component: activity
                    }
                ]
            }
        ]
    },
    {
        path:'/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    }
]
export default routes;