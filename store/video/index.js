import actions from './actions'
import mutations from './mutations'

// state initial values
const state = () => ({
  videos: [],
  vuexErrors: [],
  searchRequests: []
})

const getters = {
  getVideos (state) {
    return state.videos
  },
  getLastSearchRequest (state) {
    return state.searchRequests[state.searchRequests.lastIndex]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
