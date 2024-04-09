<template>
  <header>
    <div class="wrapper">
      <nav-bar></nav-bar>
    </div>
  </header>

  <RouterView />
</template>

<script>

import NavBar from "@/components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
