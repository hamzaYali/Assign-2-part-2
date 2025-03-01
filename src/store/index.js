// Create the local storage space to hold the authentication token and other info
import { createStore } from 'vuex'

export default createStore({
  state: {
    access: '',
    refresh: '',
    isAuthenticated: '',
    log_user: ''
  },
  getters: {

  },
  mutations: {
    initializeStore (state) {
      if (localStorage.getItem('access')) {
        state.access = localStorage.getItem('access')
      } else {
        state.access = ''
      }
      if (localStorage.getItem('refresh')) {
        state.refresh = localStorage.getItem('refresh')
      } else {
        state.refresh = ''
      }
      if (localStorage.getItem('isAuthenticated')) {
        state.isAuthenticated = localStorage.getItem('isAuthenticated')
      } else {
        state.isAuthenticated = 'false'
      }
      if (localStorage.getItem('log_user')) {
        state.log_user = localStorage.getItem('log_user')
      } else {
        state.log_user = ''
      }
    },
    setAccess (state, access) {
      state.access = access
    },
    setRefresh (state, access) {
      state.refresh = access
    },
    setIsAuthenticated (state, value) {
      state.isAuthenticated = value
    },
    setLog_User (state, username) {
      state.log_user = username
    }
  },
  actions: {
  },
  modules: {
  }
})
