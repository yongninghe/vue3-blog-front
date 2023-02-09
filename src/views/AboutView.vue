<template>
  <div>这是为了学习vue做的一个blog系统</div>
  <el-row class="mb-4">
    <el-button @click="clickFunction">testAPI</el-button>
    <p v-cloak>{{ logList }}</p>
  </el-row>
</template>
<script lang="ts">
import axios from 'axios';
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: 'AboutView',
  components: {},
  setup() {
    const logList = ref();
    // onMounted(() => {
    //   getList();
    // });
    const getList = () => {
      axios.post('/getData', {userName: "userName"})
          .then((res) => {
            console.log(res)
            return res;
          })
          .catch(() => {
            console.log("error")
            logList.value = ['111', '222'];
          });
    };
    const clickFunction = () => {
      alert("click");
      getList();
    };
    return {
      logList,
      clickFunction
    }
  }
});
</script>
