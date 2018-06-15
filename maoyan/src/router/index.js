import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../components/Movie.vue'
import Cinema from '../components/Cinema.vue'
import Self from '../components/Self.vue'
import Comesoon from '../components/Comesoon.vue'
import Onplaying from '../components/Onplaying.vue'
import Detail from '../components/Detail.vue'
import Home from '../components/Home.vue'
import City from '../components/City.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home,
            children: [{
                    path: 'movie',
                    component: Movie,
                    children: [{
                            path: 'onplaying',
                            component: Onplaying
                        },
                        {
                            path: 'comesoon',
                            component: Comesoon
                        }
                    ]
                },
                {
                    path: '/cinema',
                    component: Cinema
                },
                {
                    path: '/self',
                    component: Self
                },

            ]
        },
        {
            path: '/detail/:id',
            component: Detail
        },
        {
            path: '/city',
            name: 'City',
            component: City
        }


    ]
})