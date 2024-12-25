<template>
  <p>
    This text only updates 1 second after you've stopped typing:
  </p>
  <p>{{ text }}</p>
  <input v-model="text" />
</template>
<!-- <script setup>
import { useDebouncedRef } from '@/utils/debouncedRef'
const text = useDebouncedRef('hello', 1000)
</script> -->
<script>
import { useDebouncedRef } from '@/utils/debouncedRef'
export default {
  data() {
    return {
      text: ''
    }
  },
  mounted() {
    this.text = useDebouncedRef('hello', 1000)
  }
}
</script>
