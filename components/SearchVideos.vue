<template>
  <div>
    <input
      v-model="searchParams.q"
      class="w-full ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-800 focus:border-transparent"
      placeholder="Input keywords here..."
      type="text"
      @keyup.enter="getVideos"
    >
    <button
      class="bg-gray-50 w-16 mx-3 ring-1 ring-gray-300 hover:bg-white rounded-md focus:outline-none"
      @click="getVideos"
    >
      <svg class="mx-auto fill-current text-gray-400" style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppSearch',
  data: () => ({
    searchParams: {
      q: '',
      maxResults: 10,
      order: 'viewCount',
      key: process.env.NUXT_ENV_GOOGLE_API_KEY
    },
    responseErrors: [],
    searchRequests: []
  }),
  computed: {
    ...mapGetters({
      videos: 'video/getVideos',
      lastSearchRequest: 'video/getLastSearchRequest'
    })
  },
  watch: {
    lastSearchRequest (val) {
      this.$router.push('video/' + val.etag)
      // console.log(this.videos)
    }
  },
  methods: {
    getVideos () {
      this.$store.dispatch('video/fetchVideos', this.searchParams)
    }
  }
}
</script>
