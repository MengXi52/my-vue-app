<template>
  <div class="header">
        <div class="l-content">
            <el-button size="small" @click="handleCollapse">
              <!-- 这样也可以到到同样的效果，少写一些步骤 -->
                <!-- <el-icon class="menu"><Menu /></el-icon> -->
                <component class="icons" :is="menu"></component>
            </el-button>
            <!-- https://element-plus.org/zh-CN/component/breadcrumb.html -->
             <!-- Navigation 导航面包屑 -->
            <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- https://element-plus.org/zh-CN/component/dropdown.html#dropdown-%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95 -->
        <!-- 下拉菜单 -->
        <div class="r-content">
            <el-dropdown>
                <!-- 头像 -->
                <span class="el-dropdown-link">
                  <img :src="getImageUrl('user')" alt="头像" class="user"/>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
  </div>
</template>

<script setup lang="js">
import {ref,computed} from 'vue'
import { useAllDateStore } from '@/stores/index.js'
// import { Menu } from '@element-plus/icons-vue';

//左边的图标
const menu = ref('menu')

// https://developer.mozilla.org/zh-CN/docs/Web/API/URL4
// 如果浏览器尚不支持URL()构造函数，则可以使用Window中的Window.URL属性。确保检查你的任何目标浏览器是否要求对此添加前缀。
const getImageUrl =(user)=>{
  return new URL(`../assets/images/${user}.png`,import.meta.url).href
}
//调用store
const store = useAllDateStore()
const handleCollapse = ()=>{
  store.state.isCollapse = !store.state.isCollapse
  // store.state.isCollapse=true   这样写会写死
}

// hostname 属性是一个包含 URL 的域名的字符串
// console.log("@@@",getImageUrl.hostname)
</script>

<style lang="less" scoped>
/* justify-content 属性定义浏览器如何沿着弹性容器的主轴和网格容器的行向轴分配内容元素之间和周围的空间。 */
/* align-items 属性设置了所有直接子元素的 align-self 值作为一个组。在 Flexbox 中，
它控制子元素在交叉轴上的对齐。在 Grid 布局中，它控制了子元素在其网格区域内的块向轴上的对齐 */
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
}
.icons{
  width: 20px;
  height: 20px;

}
.r-content{
    .user{
      width: 40px;
      height: 40px;
      border-radius: 50%;   
    }
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
}
//  cursor CSS 属性设置光标的类型（如果有），在鼠标指针悬停在元素上时显示相应样式
// !important 规则会覆盖 color 属性
//  deep 是往下所有的span 均会被设置成白色(设置)
:deep(.bread span){
  color: #fff !important;
  cursor: pointer !important; 
}

</style>