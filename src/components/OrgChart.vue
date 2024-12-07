<template>
  <div class="org-chart">
    <ul>
      <TreeNode :node="data" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import TreeNode from './TreeNode.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.org-chart {
  padding: 20px;
}

.org-chart ul {
  padding-top: 20px;
  position: relative;
  transition: all 0.5s;
  list-style: none;
  padding-left: 0;
}

.org-chart li {
  float: left;
  text-align: center;
  list-style-type: none;
  padding: 20px 5px 0 5px;
  position: relative;
}

.org-chart li::before,
.org-chart li::after {
  content: '';
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 2px solid #ccc;
  width: 50%;
  height: 20px;
}

.org-chart li::after {
  right: auto;
  left: 50%;
  border-left: 2px solid #ccc;
}

.org-chart li:only-child::after,
.org-chart li:only-child::before {
  display: none;
}

.org-chart li:first-child::before,
.org-chart li:last-child::after {
  border: 0 none;
}

.org-chart li:last-child::before {
  border-right: 2px solid #ccc;
  border-radius: 0 5px 0 0;
}

.org-chart li:first-child::after {
  border-radius: 5px 0 0 0;
}

.org-chart ul ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 2px solid #ccc;
  width: 0;
  height: 20px;
}

.org-chart .node {
  border: 2px solid #4caf50;
  padding: 10px 15px;
  display: inline-block;
  border-radius: 5px;
  background: white;
  font-size: 14px;
  min-width: 100px;
  position: relative;
  transition: all 0.3s;
}

.org-chart .node:hover {
  background: #f5f5f5;
  transform: translateY(-3px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.org-chart .company {
  background: #4caf50;
  color: white;
  font-weight: bold;
}

.org-chart li::after,
.org-chart ul::after {
  content: '';
  display: block;
  clear: both;
}

@media screen and (max-width: 768px) {
  .org-chart li {
    float: none;
    display: block;
    padding: 20px 0;
  }

  .org-chart li::before,
  .org-chart li::after,
  .org-chart ul ul::before {
    display: none;
  }
}
</style>
