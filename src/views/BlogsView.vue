<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <BlogHeader msg="博客列表"></BlogHeader>
      </el-header>
      <el-main>
        <BlogContent :blog-items="blogItems"></BlogContent>
      </el-main>
      <el-footer>
        <BlogFooter></BlogFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
import {ref, toRefs, reactive, defineComponent} from 'vue'
import BlogHeader from '@/components/BlogHeader.vue'; // @ is an alias to /src
import BlogContent from '@/components/BlogContent.vue';
import BlogFooter from '@/components/BlogFooter.vue';

export default defineComponent({
  name: 'BlogsView',
  components: {
    BlogHeader,
    BlogContent,
    BlogFooter
  },
  setup() {
    const blogItems = ref([{
      date: '2016-05-03',
      title: '这是第一篇博客',
      abstract: '这是内容摘要',
    }])
    return {
      blogItems: blogItems,
    }
  }
});
</script>
