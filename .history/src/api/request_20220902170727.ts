import Axios from "./index";
import {ISearch} from "@/types/shop"
import {TCategoryReq} from "@/types/category"
import {LoginForm} from "@/types/login"
//获取首页轮播
export const getSwiper = ()=>Axios.get("/user/swiper")

//查询首页数据
export const getIndexShopData = ()=>Axios.get("/user/category?type=")

//查询指定商品信息
export const getShopDetail = (detailId:number )=>Axios.post("/user/shopdetails",{detailId})

//查询指定商品轮播
export const getShopSwiper = (detailId:number)=>Axios.post("/user/detailSwiper",{detailId})

//随机获取商品
export const getRandomShop = (number:number)=>Axios.get(`/user/shop/random?number=${number}`)

//关键字查询商品
export const getSearchShop = (obj:ISearch)=>Axios.post("/user/shopsearch",obj)

//用户登录
export const login = (obj:LoginForm)=>Axios.post(`/user/login`,obj)


//查询分类数据
export const getCategory = ()=>Axios.get("/user/category?type=category")

//查询分类下数据
export const getCategoryShop = (data:TCategoryReq)=>Axios.post("/user/categoryparent",data)


//判断用户是否收藏商品
export const getIsCollect = (userId:number |string,detailId:number)=>Axios.post(`/user/iscollect`,{userId,detailId},)

//移除收藏
export const getAddRemoveCollect = (userId:number,detailId:number)=>Axios.post(`/user/delcollectnews`,{userId,detailId})
//移除收藏
export const getRemoveCollectByCollectId = (collectId:number)=>Axios.post(`/user/delcollect`,{collectId},)

//添加收藏
export const getAddCollect = (userId:number,detailId:number)=>Axios.post(`/user/addcollect`,{userId,detailId},)

//验证当前商品是否已添加至购物车
export const getIsAddCar = (userId:number,detailId:number)=>Axios.post(`/user/addcar`,{userId,detailId})


//查询用户收藏列表
export const getSelectCollect = (userId:number)=>Axios.post(`/user/usercollect`,{userId})

//查询用户订单
export const getSelectOrderAll = (userId:number,type:number)=>Axios.post(`/user/select/order/list`,{userId,type})
