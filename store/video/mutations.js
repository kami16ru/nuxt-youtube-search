export default {
  SET_VIDEOS (state, value) {
    state.videos = value.items

    state.searchRequests.push(value)
  },
  SET_VUEX_ERRORS (state, value) {
    state.vuexErrors = value
  }
}
