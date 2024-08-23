<script setup>
// import Main from './views/Main.vue';
</script>

<template>
    <!-- 这个是main路由视图 -->
    <router-view></router-view>
<!-- 如果写成这样，路由会识别到同一一个router-view，就会变成这样 '@/assets/images/1.png' -->
<!-- <Main></Main> -->
</template>

<style>
#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
