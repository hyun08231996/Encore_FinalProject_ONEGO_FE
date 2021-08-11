import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_EMAIL = 'SET_EMAIL'
export const SET_NAME = 'SET_NAME'
export const SET_NICKNAME = 'SET_NICKNAME'

export default new Vuex.Store({
  state: {
    info: {
      email: '',
      name: '',
      nickname: '',
    }

  },
  mutations: {
    [SET_EMAIL](state, email) {
      state.info.email = email;
    },
    [SET_NAME](state, name) {
      state.info.name = name;
    },
    [SET_NICKNAME](state, nickname) {
      state.info.nickname = nickname;
    },
  },
  actions: {
  },
  modules: {
  }
})