<script lang="ts" setup>
import OrgChart from '@/components/OrgChart.vue';

const orgData = {
  name: '某某科技有限公司',
  children: [
    {
      name: '研发部',
      children: [
        { name: '前端组' },
        { name: '后端组' },
        { name: '测试组' },
      ],
    },
    {
      name: '市场部',
      children: [
        { name: '销售组' },
        { name: '市场策划组' },
      ],
    },
    {
      name: '人力资源部',
      children: [
        { name: '招聘组' },
        { name: '培训组' },
      ],
    },
  ],
};
</script>

<template>
  <OrgChart :data="orgData" />
</template>
