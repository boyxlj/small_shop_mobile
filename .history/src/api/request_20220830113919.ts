import Axios from "./index";

//获取首页轮播
export const getSwiper = ()=>Axios.get("/user/swiper")

//查询首页数据
export const getIndexShopData = ()=>request("/user/category?type=")