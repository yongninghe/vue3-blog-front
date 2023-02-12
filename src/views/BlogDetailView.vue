<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-dark">
        标题：
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-dark">
        {{ title }}
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-dark">
        作者:
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-dark">
        {{ author }}
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-dark">
        发表时间：
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content ep-bg-purple-dark">
        {{ date }}
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark">
        文章正文
      </div>
    </el-col>
  </el-row>
  <el-row style="height: 400px">
    <el-col :span="24">
      <div>
        {{ content }}
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-button link type="primary" size="large" @click="goBack()">返回</el-button>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import {ref, toRefs, reactive, defineComponent, onMounted} from 'vue'
import axios from "axios";

export default defineComponent({
  name: 'BlogDetailView',
  components: {},

  setup() {
    const title = ref();
    const date = ref();
    const author = ref();
    const content = ref();
    const blogItem = ref();
    onMounted(() => {
      getBlogItem();
    });
    const getBlogItem = () => {
      axios.post('/api/getBLogById', {userName: "userName"})
          .then((res) => {
            console.log(res)
            blogItem.value = res.data.data;
            title.value = blogItem.value.title;
            date.value = blogItem.value.date;
            author.value = blogItem.value.author;
            content.value = blogItem.value.content;
          })
          .catch(() => {
            console.log("error")
            blogItem.value = [{
              'id': "1",
              'date': "这是时间",
              'title': "文章标题",
              'author': "yongninghe",
              'abstract': "这是文章摘要",
              'content': "这是正文\n、这是正文\n,这是正文\n"
            }];
          });
    };
    const goBack = () => {
      //todo: 没有搞定$router.push， 暂时用history.back()
      history.back();
      if (window.history.length <= 1) {
        // (this as any).$router.push({path:'/'})
        return false
      } else {
        // (this as any).$router.go(-1)
      }
    };
    return {
      title,
      date,
      author,
      content,
      goBack
    }
  }
});
</script>
