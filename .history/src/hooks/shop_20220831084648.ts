import { onMounted ,ref,toRaw} from "vue";
import {getRandomShop} from "@/api/request"
import { Toast } from "vant";
export function useGetRandomShop(){
  let randomShopData:any[] =[]

  const randomShop =async ()=>{
    const {data:res} = await getRandomShop(10)
    if(res.code!=200) return Toast.fail("服务异常！")
    console.log("随机商品数据：",res.data)
    randomShopData.push(res.data) 

  }

  onMounted(()=>{
    randomShop()
  })

  return {randomShopData:randomShopData}
  // return {randomShopData:randomShopData.value}


}
