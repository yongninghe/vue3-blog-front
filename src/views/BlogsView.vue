<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <BlogHeader msg="博客列表"></BlogHeader>
      </el-header>
      <el-main>
        <BlogItem :blog-items="blogItems"></BlogItem>
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
import BlogItem from '@/components/BlogItem.vue';
import BlogFooter from '@/components/BlogFooter.vue';

export default defineComponent({
  name: 'BlogsView',
  components: {
    BlogHeader,
    BlogItem,
    BlogFooter
  },
  setup() {
    const blogItems = ref([{
      date: '2016-05-03',
      title: '这是第1篇博客',
      abstract: '这是内容摘要1',
    },
      {
        date: '2017-05-03',
        title: '这是第2篇博客',
        abstract: '这是内容摘要2',
      },
      {
        date: '2018-05-03',
        title: '这是第3篇博客',
        abstract: '这是内容摘要3',
      }])
    return {
      blogItems: blogItems,
    }
  }
});
</script>
