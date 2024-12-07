<template>
  <li>
    <div class="node">{{ node.name }}</div>
    <ul v-if="node.children && node.children.length">
      <TreeNode v-for="(child, index) in node.children" :key="index" :node="child" />
    </ul>
  </li>
</template>

<script setup>
defineOptions({
  name: 'TreeNode',
})
defineProps({
  node: {
    type: Object,
    default: () => ({}),
  }
})
</script>

<style lang="scss" scoped></style>