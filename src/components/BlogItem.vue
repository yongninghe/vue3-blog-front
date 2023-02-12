<template>
  <div class="content">
    <el-table :data="blogItems" stripe>
      <el-table-column prop="title" label="标题"/>
      <el-table-column prop="date" label="时间"/>
      <el-table-column prop="abstract" label="摘要"/>
      <el-table-column label="查看详情">
        <el-button link type="primary" size="large">
          <router-link v-bind:to="'/blogs/1'">查看</router-link>
        </el-button>
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
