import { onMounted ,ref} from "vue";
import {getRandomShop} from "@/api/request"
import 
function useGetRandomShop(){
  let randomShopData = ref([])

  const randomShop =async ()=>{
    const {data:res} = await getRandomShop(10)
    if(res.code!=200) return 
  }

}
