import getters from './getters'

const state = {
  header: true,
  loading: true,
  userName: JSON.parse(localStorage.getItem('userName')) || {},       //用户名
  //登录状态
  logined: JSON.parse(localStorage.getItem('loginStatus')) || false


};
const mutations = {
  showHeader(state){
    state.header = true
  },
  hideHeader(state){
    state.header = false
  },

  //请求数据载入动画
  showLoading(state){
    state.loading = true
  },
  hideLoading(state){
    state.loading = false
  },
  logining(state, payload){
    state.logined = payload
  },
  getUserData(state,res){
    state.userName = res
  }
};

export default {
  state,
  mutations,
  getters
}
