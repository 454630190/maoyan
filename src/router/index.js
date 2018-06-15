import Vue from 'vue'
import Router from 'vue-router'
import Movie from './../components/Movie'
import Cinema from './../components/Cinema'
import User from './../components/User'
import Dateils from './../components/Details'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/movie',
            component: Movie
        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/dateils/:id',
            component: Dateils
        },
    ]
})