const fetchVideos = ({ dispatch }, options) => {
  return dispatch('getVideos', options)
}

const getVideos = function ({ commit }, options) {
  const request = new Promise((resolve, reject) => {
    this.$axios.get('https://content-youtube.googleapis.com/youtube/v3/search', {
      params: options
    }).then((res) => {
      this.$axios.get(getUrl(res.data.items)).then((res) => {
        resolve(res.data)
      }).catch((e) => {
        reject(e)
      })
    }).catch((e) => {
      reject(e)
    })
  })

  return request.then((res) => {
    commit('SET_VIDEOS', res)
  }).catch((e) => {
    commit('SET_VUEX_ERRORS', e)
  })
}

function getUrl (videos) {
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
  getVideos
}
