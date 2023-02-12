<template>
  <div class="content">
    <el-table :data="blogItems" stripe>
      <el-table-column prop="title" label="标题"/>
      <el-table-column prop="date" label="时间"/>
      <el-table-column prop="abstract" label="摘要"/>
      <el-table-column label="查看详情">
        <template v-slot="scope">
        <el-button link type="primary" size="large">
          <router-link v-bind:to="'/blog/'+scope.row.id">查看</router-link>
        </el-button>
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
    // 传参
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
