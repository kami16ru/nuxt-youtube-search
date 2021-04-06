<template>
  <div class="container">
    <div class="flex flex-col flex-wrap content-center justify-center">
      <div class="flex flex-row mb-12 items-center">
        <div class="flex flex-col">
          <div
            v-for="(video, index) in videos"
            :key="video.id"
            class="tilted-border border px-4 py-3 my-2 transition-all transform ease-in-out duration-700 center"
            :class="panels.indexOf(index) !== -1 ? 'h-96' : ''"
          >
            <div class="flex flex-row">
              <div class="flex flex-col mx-2 my-auto">
                <img :src="video.snippet.thumbnails.default.url" width="50px" alt="video thumbnail">
              </div>
              <section class="w-full transition-transform transform ease-in-out duration-700">
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
                :class="panels.indexOf(index) !== -1 ? 'translate-y-48' : ''"
                @click="expandPanel(index)"
              >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.91 8.59L12.5 13.17L17.09 8.59L18.5 10L12.5 16L6.5 10L7.91 8.59Z" fill="black" fill-opacity="0.55" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListVideos',
  data () {
    return {
      panels: []
    }
  },
  computed: {
    ...mapGetters({
      videos: 'video/getVideos'
    })
  },
  mounted () {
    console.log(this.videos)
  },
  methods: {
    expandPanel (videoId) {
      const panel = this.panels.find(panel => panel === videoId)

      if (panel !== undefined) {
        this.panels.splice(this.panels.indexOf(panel), 1)
      } else {
        this.panels.push(videoId)
      }
    }
  }
}
</script>

<style scoped>
.tilted-border {
  transition: 0.5s ease-in-out;
}
</style>
