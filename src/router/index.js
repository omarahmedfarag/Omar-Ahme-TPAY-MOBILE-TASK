import {  createRouter,createWebHistory} from "vue-router";


import Home from "../components/home";
import Detailed from "../components/detailed";


const routes = [
    {
        path:"/detailed/:id",
        name:"Detailed",
        component:Detailed
    },
    
    {
        path:"/home",
        name:"Home",
        component:Home
    }
    ,
    {
        path:"/",
        redirect: '/home'
    }
    
]


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})


export default router;