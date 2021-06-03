/*
 * @Author       : yfye
 * @Date         : 2021-06-03 15:23:31
 * @LastEditors  : yfye
 * @LastEditTime : 2021-06-03 17:36:49
 * @FilePath     : \newTable\src\api\index.js
 */
//引用上面的http.js文件
import {get, post, put, deletes } from "@/service/http";
//登录接口
// export const getLogin = fromData => post("user/login", fromData);
//退出登录接口
// export const getLoginOut = () => get("user/logout");
//图片上传接口 参数 ${type},fileData
// export const SaveImg = (type, fileData) =>
//     post(`goods/save_img/${type}`, fileData);
// 表格接口
// http://47.107.180.202:8080/user/news/list?Id=22&pageNo=1&pageSize=10
export const getTable = formData => get("/news/list", formData);