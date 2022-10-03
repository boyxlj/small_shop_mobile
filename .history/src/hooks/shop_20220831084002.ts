import { onMounted ,ref} from "vue";
import {getRandomShop} from "@/api/request"
import { Toast } from "vant";
export function useGetRandomShop(){
  let randomShopData = ref([])

  const randomShop =async ()=>{
    const {data:res} = await getRandomShop(10)
    if(res.code!=200) return Toast.fail("服务异常！")
    console.log("随机商品数据：",res.data)
    randomShopData.value = res.data
  }

  onMounted(()=>{
    randomShop()
  })
  return randomShopData

}
