import { onMounted ,ref,toRaw} from "vue";
import {getRandomShop} from "@/api/request"
import { Toast } from "vant";
export function useGetRandomShop(){
  let randomShopData=ref([])

  const randomShop =async ()=>{
    const {data:res} = await getRandomShop(10)
    if(res.code!=200) return Toast.fail("服务异常！")
    randomShopData.value = res.data
    console.log("随机商品数据：",toRaw(randomShopData.value))
  }

  onMounted(async ()=>{
    randomShop()
  })

    return toRaw(randomShopData.value)


}
