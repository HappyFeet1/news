export default {
  //我们的动作
  showHeader: ({commit})=>{
    commit('showHeader')
  },
  hideHeader:({commit})=>{
    commit('hideHeader')
  },
  showLoading:({commit})=>{
    commit('showLoading')
  },
  hideLoading:({commit})=>{
    commit('hideLoading')
  }
}
