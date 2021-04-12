<template>
  <div class="flex flex-col h-screen flex-wrap content-center justify-center">
    <div class="flex flex-row mb-12 items-center">
      <div class="flex flex-col">
        <h1 class="mx-auto text-5xl font-bold text-gray-900">
          404
        </h1>
        <h2 class=" mx-auto text-2xl text-gray-900">
          Page not found
        </h2>
      </div>

      <Logo width="180px" height="180px" />
    </div>
    <div class="flex flex-row mb-12 items-center">
      <button
        class="mx-auto w-full bg-white focus:outline-none focus:shadow-outline hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border border-red-600 rounded shadow"
        @click="$router.push('/')"
      >
        Return home
      </button>
    </div>
  </div>
</template>
