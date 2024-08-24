<script setup>
import { ref,getCurrentInstance,onMounted } from 'vue';
// import axios from 'axios';
const {proxy} = getCurrentInstance()   //二次封装



const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`,import.meta.url).href
}
// 通过这个数据是写死的
const tableDate = ref(
  [{
    name:"Java",
    todayBuy: 100,
    monthBuy: 200,
    totalBuy: 300,
  },
  {
    name:"Python",
    todayBuy: 100,
    monthBuy: 200,
    totalBuy: 300,
  }]
)
const countData = ref([])

const tableLabel = ref(
  {
    name:"课程",
    todayBuy: '今日购买',
    monthBuy: '本月购买',
    totalBuy: '总购买',
  }
)
//二次封装
const getTableData =async () => {
    const data = await proxy.$api.getTableData()
    tableDate.value = data.tableData
    // console.log("@@",data)
  }
  const getCountData =async () => {
    const data = await proxy.$api.getCountData()
    countData.value = data
    // console.log("##",data)
  }
onMounted(()=>{
    getTableData(),
    getCountData()
})


// axios({
//   url:'/api/home/getTableData',
//   method:'get'
// }).then(res=>{
  
//   //客户会给后端数据文档 要学会制造假数据，把交互的请求的流程 根据接口文档跑通 还要制造出数据
//   // 有一种工具 可以拦截请求 把我们制造的数据(根据接口文档来的)   mock.js
//   if(res.data.code===200){
//     console.log(res.data.data.TableData)
//     tableDate.value = res.data.data.TableData
//   }
// })
</script>

<template>
  <!--Layout 布局 https://element-plus.org/zh-CN/component/layout.html -->
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px;">
      <!-- shadow="hover" 鼠标放在卡片上面会有阴影 -->
      <!--卡片  https://element-plus.org/zh-CN/component/card.html -->
      <el-card shadow="hover">
        <div class="user">
            <img :src="getImageUrl('user')" class="user" alt="头像"/>
            <div class="user-info">
              <p class="user-info-admin">Admin</p>
              <p class="user-info-p">超级管理员</p>
            </div>
        </div>
        <div class="login-info">
            <p>上次登入时间:<span>2024-06-30</span></p>
            <p>上次登入地点:<span>北京</span></p>
        </div>
      </el-card>
<!-- https://element-plus.org/zh-CN/component/table.html -->
 <!-- table表格 ，使用了v-for-->
      <el-card shadow="hover" class="user-table"> 
        <el-table :data="tableDate">
            <el-table-column
                v-for="(val,key) in tableLabel"
                :key="key"
                :prop="key"
                :label="val"
            >
            </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px;">
      <div class="num">
            <el-card
            :body-style="{display:'flex',padding:0}"
            v-for="item in countData"
            :key="item.name"
           >
          <component :is="item.icon" class="icons" :style="{background:item.color}"></component>
          <div class="detail">
            <p class="num">¥{{ item.value }}</p>
            <p class="txt">¥{{ item.name }}</p>
          </div>
          </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
// overflow显示滚动条
/* align-items 属性设置了所有直接子元素的 align-self 值作为一个组。在 Flexbox 中，
它控制子元素在交叉轴上的对齐。在 Grid 布局中，它控制了子元素在其网格区域内的块向轴上的对齐 */
.home{
  height: 100%;
  overflow: hidden;
  .user{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info{
      p{
        line-height: 40px;
      }
      .user-info-p{
        color: #999;
      }
      .user-info-admin{
        font-size: 35px;
      }
    }
  }
  .login-info{
    p{
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span{
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
.user-table{
  margin-top: 20px;
}
.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
  .icons{
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .num{
      font-size: 30px;
      margin-bottom: 10px;
    }
    .txt{
      font-size: 15px;
      text-align: center;
      color:#999;
    }
  }
}

</style>
