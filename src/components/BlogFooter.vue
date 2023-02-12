<template>
  <div>
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
</script>
