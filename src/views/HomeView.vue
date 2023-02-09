<template>
  <div class="common-layout">
    <el-container>
      <el-header><BlogHeader msg="博客列表"> </BlogHeader></el-header>
      <el-main>Main</el-main>
      <el-footer style="alignment: center"><BlogFooter></BlogFooter></el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BlogHeader from '@/components/BlogHeader.vue'; // @ is an alias to /src
import BlogFooter from '@/components/BlogFooter.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    BlogHeader,
    BlogFooter
  },
});
</script>
