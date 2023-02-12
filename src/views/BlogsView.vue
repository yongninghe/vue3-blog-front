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
import {ref, toRefs, reactive, defineComponent, onMounted} from 'vue'
import BlogHeader from '@/components/BlogHeader.vue'; // @ is an alias to /src
import BlogItem from '@/components/BlogItem.vue';
import BlogFooter from '@/components/BlogFooter.vue';
import axios from "axios";

export default defineComponent({
  name: 'BlogsView',
  components: {
    BlogHeader,
    BlogItem,
    BlogFooter
  },

  setup() {
    const blogItems = ref();
    onMounted(() => {
      getLogList();
    });
    const getLogList = () => {
      axios.post('/api/getLogList', {userName: "userName"})
          .then((res) => {
            console.log(res)
            blogItems.value = res.data.data;
          })
          .catch(() => {
            console.log("error")
            blogItems.value = [{
              'id': "1",
              'date': "这是时间",
              'title': "文章文章标题",
              'abstract': "这是文章摘要"
            }];
          });
    };
    return {
      blogItems: blogItems
    }
  }
});
</script>
