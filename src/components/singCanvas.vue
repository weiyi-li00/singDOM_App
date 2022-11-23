<script setup>
import { ElMessage, ElMessageBox } from "element-plus";

const open = () => {
  ElMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning"
    }
  )
    .then(() => {
      ElMessage({
        type: "success",
        message: "Delete completed"
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled"
      });
    });
};
</script>
<template>
  <el-button text @click="open">Click to open the Message Box</el-button>
  <el-button type="danger" plain>Danger</el-button>
</template>
<style lang="scss" scoped></style>
