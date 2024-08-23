<script setup>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
</script>
<!-- 使用element-plus需要下载 element-plus基于 Vue 3，面向设计师和开发者的组件库-->
<template>
  <!-- https://element-plus.org/zh-CN/component/container.html -->
  <div class="common-layout">
    <!-- <el-container>：外层容器。 当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列， 否则会水平左右排列。 -->
    <el-container class="lay-container">
      <!-- 自定义左侧的组件 -->
       <!-- 数据共享需要下载pinia Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态-->
       <common-aside />
       <el-container>
        <el-header class="el-header">
          <common-header/>
        </el-header>
        <el-main class="right-main">
          <!-- 这个是home路由视图 -->
          <router-view></router-view>
        </el-main>
       </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.common-layout{
  height: 100%;
}
.lay-container{
  height: 100%;
}
.el-header{
background-color: #333;
}
</style>
