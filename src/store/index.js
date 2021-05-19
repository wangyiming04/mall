import { createStore } from 'vuex'

export default createStore({
  state: {
    imgList:[],
    RecommendViewimg:[]

  },
  mutations: {
    getImgList(state,val){
      console.log(val)
      state.imgList = val
    },
    getRecommendViewimgList(state,val){
      state.RecommendViewimg = val
    }
  },
  actions: {
  },
  modules: {
  }
})
