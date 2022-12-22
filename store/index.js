export const state = () => ({
  vh: 0,
  mobile: false,
})

export const mutations = {
  setVh(state, vh) {
    state.vh = vh
  },

  setMobile(state, mobile) {
    state.mobile = mobile
  }
}

export const actions = {
  setVh({ commit }, vh) {
    commit('setVh', vh)
  },

  setMobile({ commit }, mobile) {
    commit('setMobile', mobile)
  }
}

export const getters = {
  getVh: (state) => state.vh,
  getMobile: (state) => state.mobile
}