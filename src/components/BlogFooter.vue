<template>
  <div class="example-pagination-block" style="alignment: center">
    <el-pagination layout="prev, pager, next" :total="1000"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BlogFooter',
  props: {
    msg: String,
  },
});
</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
  align-content: center;
  alignment: center;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
  align-content: center;
  alignment: center;
}
</style>
