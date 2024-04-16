<template>
  <div>
    <p>i'm ref child</p>
  </div>
</template>

<script setup>
import { defineExpose } from 'vue';
const a = 10
const b = 77

defineExpose({a,b})
</script>