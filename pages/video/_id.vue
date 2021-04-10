<template>
  <div class="container">
    <div class="flex flex-col flex-wrap content-center justify-center">
      <div class="flex flex-row mb-12 items-center">
        <p v-if="$fetchState.pending">Fetching videos...</p>
        <div v-if="!$fetchState.pending" class="flex flex-col">
          <div
            v-for="(video, index) in sortedVideos"
            :key="video.id"
            class="tilted-border border px-4 py-3 my-2"
            style="width: 560px"
          >
            <div class="flex flex-row">
              <div class="flex flex-col mx-2 my-auto">
                <img :src="video.snippet.thumbnails.default.url" width="50px" alt="video thumbnail">
              </div>
              <section class="w-full">
                <div class="flex flex-col">
                  <h1 class="text-sm font-bold text-gray-900">
                    {{ video.snippet.title }}
                  </h1>
                  <p class="text-xs text-gray-600">
                    {{ video.snippet.channelTitle }}
                  </p>
                  <p class="text-xs text-gray-500">
                    {{ video.statistics.viewCount }} views · {{ video.snippet.publishedAt }}
                  </p>
                </div>
              </section>
              <div
                class="flex flex-col justify-center cursor-pointer transition-all transform ease-in-out duration-700"
                @click="expandPanel(index)"
              >
                <svg
                  v-if="!expanded(index)"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.91 8.59L12.5 13.17L17.09 8.59L18.5 10L12.5 16L6.5 10L7.91 8.59Z" fill="black" fill-opacity="0.55" />
                </svg>
                <svg v-if="expanded(index)" style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                </svg>
              </div>
            </div>
            <div v-if="expanded(index)" class="flex flex-row justify-center">
              <iframe
                width="560"
                height="315"
                :src="'https://www.youtube.com/embed/' + video.id"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListVideos',
  data () {
    return {
      panels: [],
      sortedVideos: []
    }
  },
  async fetch () {
    // dispatch action fetchAllPosts
    await this.fetchVideosStats(this.videos).then(() => {
      this.sortedVideos = this.sortByViews(this.videosStats)
    })
  },
  computed: {
    ...mapGetters({
      videos: 'video/getVideos',
      videosStats: 'video/getVideosStats'
    })
  },
  methods: {
    ...mapActions({
      fetchVideosStats: 'video/fetchVideosStats',
      getStatsByVideoIds: 'video/getStatsByVideoIds'
    }),
    expandPanel (videoId) {
      const panel = this.panels.find(panel => panel === videoId)

      panel !== undefined ? this.panels.splice(this.panels.indexOf(panel), 1) : this.panels.push(videoId)
    },
    expanded (index) {
      return this.panels.includes(index)
    },
    sortByViews (videos) {
      const sortedVideos = videos.map(item => item)

      sortedVideos.sort(function (a, b) {
        if (Number(a.statistics.viewCount) > Number(b.statistics.viewCount)) {
          return -1
        }
        if (Number(a.statistics.viewCount) < Number(b.statistics.viewCount)) {
          return 1
        }
        return 0
      })

      return sortedVideos
    }
  }
}
</script>
