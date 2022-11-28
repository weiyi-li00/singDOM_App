<script lang="ts" setup>
import { ref } from "vue";
import { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
<template></template>
<style lang="scss" scoped>
.sideBar {
  // width: 402px;
  padding-left: 24px;
  padding-right: 78px;
  float: right;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
}
.nav {
  background-color: #f5f6f8;
  padding: 0px;
  margin: 0px;
  .nav-tabs {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .nav-link {
      padding: 0px;
      color: #000000;
    }
  }
}
.active {
  background-color: #f5f6f8;
  border-color: #f5f6f8;
}
.modal-header {
  border-bottom: 0;
}
.modal-content {
  width: 512px;
}
.tab-content {
  padding: 16px 0;
}
</style>
