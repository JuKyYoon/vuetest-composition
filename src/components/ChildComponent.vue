<template>
  <p> {{ msg }}</p>
  <slot />
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps(['msg'])

</script>

<style scoped>

p {
  color: blue
}
</style>