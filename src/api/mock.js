import Mock from "mockjs";
import homeApi from "./mockData/home.js";

//1.拦截的路径 2.方法（post或get）3.制造出的假数据
//1.拦截的路径 可能需要正则表达式  "/api/home/getTableData"这样写控制台不会报错，但打印不了数据
Mock.mock(/api\/home\/getTableData/,"get",homeApi.getTableData);
Mock.mock(/api\/home\/getCountData/,"get",homeApi.getCountData);