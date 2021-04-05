<template>
  <svg class="animation-appear-1 fill-current text-red-600 h-auto" :style="style" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A2,2 0 0,1 4,10H20A2,2 0 0,1 22,12M16,16L10,12.73V19.26L16,16Z" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    }
  },
  computed: {
    style () {
      return 'width: ' + this.width + ';height' + this.height
    }
  }
}
</script>
