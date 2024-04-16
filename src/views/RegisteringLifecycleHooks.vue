<template>
  <div>
    <h3>생명주기</h3>
    <button @click="cnt++">업뎃</button>
    {{ cnt }}
  </div>
</template>

<script setup>

import { onMounted, onBeforeUpdate ,onUpdated, onUnmounted,ref } from 'vue'

const cnt = ref(3)
onMounted(() => {
  console.log(cnt.value)
})

onBeforeUpdate(() => {
  console.log("Before update ",cnt.value)
})

onUpdated(() => {
  console.log("updated " , cnt.value)
})

onUnmounted(() => {
  console.log("unmount")
})

</script>

<style scoped>
</style>