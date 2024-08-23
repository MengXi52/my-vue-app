<template>
    <!-- width加冒号使其变成动态，菜单折叠时容器也跟着折叠 -->
    <el-aside :width="width">
        <!-- https://element-plus.org/zh-CN/component/menu.html -->
         <!-- :collapse="true" 菜单折叠,为真折叠，为假不折叠-->
        <el-menu
        background-color="#545c64"
        text-color="#fff"
        :collapse="isCollapse"      
        >
        <!-- v-show 为真显示，为假不显示-->
            <h3 v-show="!isCollapse">通用后台管理</h3>
            <h3 v-show="isCollapse">后台</h3>
            <!-- 菜单 v-for循环标签 -->
            <!-- 没子菜单 -->
            <el-menu-item 
                v-for="item in noChildren"
                :index="item.path"
                :key="item.path"
            >
                <!-- component不被el-icon包裹图标会变不正常 -->
                <el-icon><component class="icons" :is="item.icon"></component></el-icon>
                <span>{{ item.label }}</span>
            </el-menu-item>

            <!-- 有子菜单 -->
            <!-- 主菜单 -->
            <el-sub-menu 
                v-for="item in hasChildren"
                :index="item.path"
                :key="item.path"
            >
            <template #title>
                <!-- 图标 component不被el-icon包裹图标会变不正常-->
                <el-icon><component class="icons" :is="item.icon"></component></el-icon>
                <span>{{ item.label }}</span>
            </template>
                <!-- 子菜单 -->
            <el-menu-item-group>
                <!-- v-for="(subItem,subIndex) in item.Children" -->
                <el-menu-item 
                    v-for="subItem in item.children"
                    :index="subItem.path"
                    :key="subItem.path"
                >
                <el-icon><component class="icons" :is="subItem.icon"></component></el-icon>
                <span>{{ subItem.label }}</span>
            
            </el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>
        
        
      </el-menu>
    </el-aside>
</template>
<script setup lang="js">
import {ref,computed} from 'vue'
import { useAllDateStore } from '@/stores/index.js'
// import { useRoute } from 'vue-router';
// import router from '../router';

    const list = ref([
    {
        path:'/home',
        name:'home',
        label:'首页',
        icon:'house',
        url:'Home'
    },
    {
        path:'/mall',
        name:'mall',
        label:'商品管理',
        icon:'video-play',
        url:'Mall'
    },
    {
        path:'/user',
        name:'user',
        label:'用户管理',
        icon:'user',
        url:'User'
    },
    {
        path:'/other',
        name:'other',
        label:'其他',
        icon:'location',
        children:[
            {
                path:'/page1',
                name:'page1',
                label:'页面1',
                icon:'setting',
                url:'Page1'
            },
            {
                path:'/page2',
                name:'page2',
                label:'页面2',
                icon:'setting',
                url:'Page2'
            }
        ]
    }
    ])
    //width ,三目运算
    const width =computed(()=>store.state.isCollapse ? '64px' : '180px')

    const noChildren = computed(() => list.value.filter(item => !item.children))
    const hasChildren = computed(() => list.value.filter(item => item.children))
    // //Pinia
    const store = useAllDateStore()
    const isCollapse = computed(()=>store.state.isCollapse)

    // console.log("##",isCollapse )
     // const clickMenu=(item)=>{
    //  router.push(item.path)   
    // }
</script>
<style lang="less" scoped>
// 设置图标样式,使用el-icon包裹可以变正常
    // .icons{
    //     width: 18px;
    //     height: 18px;
    //     margin-right: 5px;
    // }
//设置菜单样式
.el-menu{
    border-right: none; //菜单与主内容接触的线条消失
    
}
//设置标题样式
h3{
        line-height: 48px;
        color: #fff;
        text-align: center;
}
//设置全局侧边区域样式
.el-aside{
    //height: 100%;  //有问题，设置成100%，浏览器铺不满
    height: 1000px;  //暂时使用这个
    background-color: #545c64;
}
</style>