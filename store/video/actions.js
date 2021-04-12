const fetchVideos = ({ dispatch }, options) => {
  return dispatch('searchVideos', options)
}

const fetchVideosStats = ({ dispatch }, videos) => {
  return dispatch('getStatsByVideoIds', videos)
}

const searchVideos = function ({ commit }, options) {
  return this.$axios.get('https://content-youtube.googleapis.com/youtube/v3/search', {
    params: {
      ...options,
      key: process.env.NUXT_ENV_GOOGLE_API_KEY
    }
  }).then((res) => {
    commit('SET_VIDEOS', res.data)
  }).catch((e) => {
    commit('SET_VUEX_ERRORS', e)
  })
}

const getStatsByVideoIds = function ({ commit }, videos) {
  return this.$axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'snippet,statistics',
      id: getVideoIdsStr(videos),
      key: process.env.NUXT_ENV_GOOGLE_API_KEY
    }
  }).then((res) => {
    commit('SET_VIDEOS_STATS', res.data)
  }).catch((e) => {
    commit('SET_VUEX_ERRORS', e)
  })
}

function getVideoIdsStr (videos) {
  return videos.map(item => item.id.videoId).toString()
}

export default {
  fetchVideos,
  fetchVideosStats,
  searchVideos,
  getStatsByVideoIds
}
