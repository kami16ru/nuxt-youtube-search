<template>
  <div class="flex flex-col h-screen flex-wrap content-center justify-center">
    <div class="flex flex-row mb-16">
      <div class="flex flex-col justify-center content-center align-middle">
        <h1 class="text-5xl font-bold text-gray-900">
          You<span class="text-red-600">Tube</span> <span class="text-gray-500">Search</span>
        </h1>
        <h2 class="mx-auto text-2xl text-gray-900">
          Last 10 relevant
        </h2>
      </div>
      <svg class="fill-current text-red-600 h-auto" style="width:180px;height:180px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A2,2 0 0,1 4,10H20A2,2 0 0,1 22,12M16,16L10,12.73V19.26L16,16Z" />
      </svg>
    </div>

    <div class="flex flex-row">
      <input
        v-model="input"
        class="w-full ring-1 ring-gray-300 focus:outline-none focus:ring-indigo-800 focus:border-transparent"
        placeholder="Input keywords here..."
        type="text"
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
  </div>
</template>

<script>
export default {
  data: () => ({
    input: ''
  }),
  methods: {
    getVideos () {
      this.$router.push('/' + this.input)
      this.input = ''
    }
  }
}
</script>
