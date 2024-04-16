<template>
  <div>
    <button @click="$emit('cnt-up')">ccccccccclick</button>
    {{ cnt }}
  </div>
</template>
<script setup>
import {defineProps} from 'vue'

defineProps(['cnt'])
</script>