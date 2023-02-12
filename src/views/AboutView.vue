<template>
  <el-row class="mb-4">
    <p v-cloak>{{ about }}</p>
  </el-row>
</template>
<script lang="ts">
import axios from 'axios';
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: 'AboutView',
  components: {},
  setup() {
    const about = ref();
    onMounted(() => {
      getAbout();
    });
    const getAbout = () => {
      axios.post('/api/getAbout', {paramName: "参数名称"})
          .then((res) => {
            console.log(res)
            about.value = res.data.data;
          })
          .catch(() => {
            console.log("error")
            about.value = "一个后端程序员用于学习的vue3+elementplus+axios+mock的前端工程（网络发生错误后的取值）";
          });
    };
    return {
      about
    }
  }
});
</script>
