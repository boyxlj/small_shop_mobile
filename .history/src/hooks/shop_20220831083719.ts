import { onMounted ,ref} from "vue";
import {getRandomShop} from "@/api/request"
import { Toast } from "vant";
function useGetRandomShop(){
  let randomShopData = ref([])

  const randomShop =async ()=>{
    const {data:res} = await getRandomShop(10)
    if(res.code!=200) return Toast.fail("服务异常！")
  }

}
