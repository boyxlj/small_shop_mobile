const BASEURL = ""
import Axios from "./index"
export const  getAbout = ()=>Axios.get(`${BASEURL}/select/article/small/shop?artId=small-shop-about`)