const fetchVideos = ({ dispatch }, options) => {
  return dispatch('searchVideos', options)
}

const fetchVideosStats = ({ dispatch }, videos) => {
  return dispatch('getStatsByVideoIds', videos)
}

const searchVideos = function ({ commit }, options) {
  return this.$axios.get('https://content-youtube.googleapis.com/youtube/v3/search', {
    params: options
  }).then((res) => {
    commit('SET_VIDEOS', res.data)
  }).catch((e) => {
    commit('SET_VUEX_ERRORS', e)
  })
}

const getStatsByVideoIds = function ({ commit }, videos) {
  return this.$axios.get(getUrlFromVideosArray(videos)).then((res) => {
    commit('SET_VIDEOS_STATS', res.data)
  }).catch((e) => {
    commit('SET_VUEX_ERRORS', e)
  })
}

function getUrlFromVideosArray (videos) {
  const videoIds = videos.map(item => item.id.videoId)

  let str = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id='

  videoIds.forEach((videoId) => {
    str += (videoId + '%2C')
  })

  str += '&key=' + process.env.NUXT_ENV_GOOGLE_API_KEY

  return str
}

export default {
  fetchVideos,
  fetchVideosStats,
  searchVideos,
  getStatsByVideoIds
}
