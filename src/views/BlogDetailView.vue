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
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'BlogDetailView',
  components: {},

  setup() {
    const $router = useRouter();
    const title = ref();
    const date = ref();
    const author = ref();
    const content = ref();
    const id = ref();
    const blogItem = ref();
    onMounted(() => {
      getId();
      getBlogItem();
    });
    const getId = () => {
      console.log($router)
      // 获取路径上传来的id
      id.value = $router.currentRoute.value.params.id;
    };
    const getBlogItem = () => {
      axios.post('/api/blog', {id: id.value})
          .then((res) => {
            blogItem.value = res.data.data;
            title.value = blogItem.value.title;
            date.value = blogItem.value.date;
            author.value = blogItem.value.author;
            content.value = blogItem.value.content;
          })
          .catch(() => {
            blogItem.value = [{}];
          });
    };
    const goBack = () => {

      if (window.history.length <= 1) {
        $router.push({path: '/'})
        return false
      } else {
        $router.go(-1)
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
