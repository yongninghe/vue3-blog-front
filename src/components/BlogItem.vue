<template>
  <div class="content">
    <el-table :data="blogItems" stripe style="width: 80%">
      <el-table-column prop="title" label="标题" width="180"/>
      <el-table-column prop="date" label="时间" width="180"/>
      <el-table-column prop="abstract" label="摘要"/>
      <el-table-column label="查看详情"/>
    </el-table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BlogContent',
  props: {
    blogItems: Array,
  },
});
</script>

<style scoped>
</style>
