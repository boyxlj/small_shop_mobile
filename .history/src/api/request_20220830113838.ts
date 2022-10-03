import Axios from "./index";

//获取首页轮播
export const getSwiper = ()=>Axios.get("/user/swiper")