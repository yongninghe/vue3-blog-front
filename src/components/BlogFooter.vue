<template>
  <div class="example-pagination-block" style="alignment: center">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'BlogFooter',
  props: {
    msg: String,
  },
  setup(){
    const currentPage = ref(4);
    const handleSizeChange = (id: number) => {
    alert("handleSizeChange" + id);
  };
    const handleCurrentChange = (id: number) => {
      alert("handleCurrentChange" + id);
    };
  return {
    handleSizeChange,
    handleCurrentChange,
    currentPage
  }
}
})
;
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
