<template>
  <div class="content">
    <el-table :data="blogItems" stripe style="width: 80%">
      <el-table-column prop="title" label="标题" width="180"/>
      <el-table-column prop="date" label="时间" width="180"/>
      <el-table-column prop="abstract" label="摘要"/>
      <el-table-column label="查看详情">
        <template #default>
          <el-button link type="primary" size="small" @click="showDetail(1)">详情</el-button>
        </template>
      </el-table-column>
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
  setup() {
    console.log("setup")
    const showDetail = (id: number) => {
      alert("click showDetail" + id);
    };
    return {
      showDetail
    }
  }
});
</script>

<style scoped>
</style>
