import Axios from "./index";
import {ISearch} from "@/types/shop"
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
export const getCategoryShop = (data)=>Axios.post("/user/categoryparent",data,'POST')