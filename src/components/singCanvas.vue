<script lang="ts" setup>
import { ref } from "vue";
import { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
<template>
  <div class="sideBar">
    <!-- Button trigger modal -->
    <div type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <b>+</b>創造簽名檔
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="User" name="first">User</el-tab-pane>
                <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                <el-tab-pane label="Role" name="third">Role</el-tab-pane>
              </el-tabs>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->
  </div>
</template>
<style lang="scss" scoped>
.sideBar {
  // width: 402px;
  padding-left: 24px;
  padding-right: 78px;
  float: right;
  background-color: #e5e5e5;
}
</style>
