import Vue from 'vue'
import Vuex from 'vuex'
import  * as getters from './getters'
import  * as actions from './actions'
import  * as mutations from './mutations'


Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    cityList: [],
    currentCourseId: 1,
    filters: {
      areaFilters: false,
      priceFilters: false
    },
    searchData: {
      message: '',
      selects: {},
      price: {},
      area: {}
    },
    textSearch: true,
  },
  actions,
  getters,
  mutations,
})

export default store

