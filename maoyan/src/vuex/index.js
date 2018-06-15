import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let state = {
    coming: [],
    cinemas: []
}
let actions = {

}
let mutations = {
    getCinema(state, a) {
        let temp = new Date().getTime()
        let url2 = '/anhao/ajax/movie?forceUpdate=' + temp;
        let data = {
            movieId: a,
            day: 2018 - 6 - 14,
            offset: 0,
            limit: 20,
            districtId: -1,
            lineId: -1,
            hallType: -1,
            brandId: -1,
            serviceId: -1,
            areaId: -1,
            stationId: -1,
            item: "",
            updateShowDay: true,
            reqId: temp,
            cityId: 1
        }
        axios.post(url2, data).then((res) => {

            let aa = res.data.cinemas;
            state.cinemas = aa
                // console.log(aa)


        })
    },
    getComing(state) {
        let url = '/anhao/ajax/mostExpected?ci=1&limit=10&offset=0&token='
        axios.get(url).then((res) => {
            state.coming = res.data
        })
    },
    tomorrow(a) {
        let temp = new Date().getTime()
        let y = new Date().getFullYear()
        let m = new Date().getMonth() + 1;
        let d = new Date().getDate()
        let url2 = '/anhao/ajax/movie?forceUpdate=' + temp;
        let data = {
            movieId: a,
            day: y + '-' + m + '-' + d,
            offset: 0,
            limit: 20,
            districtId: -1,
            lineId: -1,
            hallType: -1,
            brandId: -1,
            serviceId: -1,
            areaId: -1,
            stationId: -1,
            item: "",
            updateShowDay: true,
            reqId: temp,
            cityId: 1
        }
        axios.post(url2, data).then((res) => {

            let aa = res.data.cinemas;
            state.cinemas = aa
                // console.log(aa)


        })
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store