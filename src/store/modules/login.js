const state = {
  isFormal: false,
  token: '',
  userInfo: {},
}

const mutations = {
  SET_ISFORMAL: (state, isFormal) => {
    state.isFormal = isFormal
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
