import { onMounted ,ref,toRaw} from "vue";
import {getRandomShop} from "@/api/request"
import { Toast } from "vant";
export function useGetRandomShop(){
  const randomShopData=ref(null)
  const state = ref(false)
  const randomShop =async ()=>{
    const {data:res} = await getRandomShop(10)
    if(res.code!=200) return Toast.fail("服务异常！")
    randomShopData.value = res.data
    // console.log("随机商品数据：",toRaw(randomShopData.value))
    state.value = true
  }

  // onMounted( ()=>{
    randomShop()
  // })

    return {randomShopData,state}


}
