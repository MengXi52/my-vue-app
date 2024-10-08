/**
 * 整个api的统一管理
 */

import { mock } from "mockjs";
import request from "./request";

// 请求左页的表格数据
// 需要全局挂载，先引入使用
// 配置文件可以与不同地址交互，快速改变地址
// /api/home/getTableData
export default {
    getTableData(){
        return request({
            url:"/home/getTable",
            method:"get",
        })
    },
    getCountData(){
        return request({
            url:"/home/getCountData",
            method:"get",
        })
    }
}