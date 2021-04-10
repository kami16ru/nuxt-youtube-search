import actions from './actions'
import mutations from './mutations'

// state initial values
const state = () => ({
  videos: [],
  videosStats: [],
  vuexErrors: [],
  searchRequests: []
})

const getters = {
  getVideos (state) {
    return state.videos
  },
  getVideosStats (state) {
    return state.videosStats
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
