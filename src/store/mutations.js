import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },

  [types.FETCH_ALL_TASKLIST] (state, payload) {
    // TODO:
    throw new Error('FETCH_ALL_TASKLIST')
  },

  [types.ADD_TASK] (state, payload) {
    // TODO:
    throw new Error('ADD_TASK')
  },

  [types.UPDATE_TASK] (state, payload) {
    // TODO:
    throw new Error('UPDATE_TASK')
  },

  [types.REMOVE_TASK] (state, payload) {
    // TODO:
    throw new Error('REMOVE_TASK')
  },

  [types.AUTH_LOGOUT] (state, payload) {
    // TODO:
    throw new Error('AUTH_LOGOUT')
  }
}
