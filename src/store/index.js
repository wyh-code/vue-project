import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      users: []
    }
  },
  mutations: {
    onRegister(state, payload) {
      state.users.push({
        ...payload,
        time: +new Date,
        login: false
      })
      return {
        ...state
      }
    },

    onRemove(state, payload) {
      state.users.splice(payload.index, 1);

      return {
        ...state
      }
    },

    onSwitch(state, payload) {
      state.users[payload.index].login = !state.users[payload.index].login;
      return {
        ...state
      }
    }
  }
})

export default store;