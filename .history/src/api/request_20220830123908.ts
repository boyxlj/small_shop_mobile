import Axios from "./index";

//获取首页轮播
export const getSwiper = ()=>Axios.get("/user/swiper")

//查询首页数据
export const getIndexShopData = ()=>Axios.get("/user/category?type=")

//查询指定商品信息
export const ShopDetail = (detailId:number)=>Axios.post("/user/shopdetails",{detailId})
