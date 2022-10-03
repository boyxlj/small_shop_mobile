import { onMounted, reactive } from "vue";
import { getRandomShop } from "@/api/request"
import { Toast } from "vant";
export function useGetRandomShop() {
  const data:any = reactive({
    randomShopData:[],
  })
  const randomShop = async () => {
    const num = Math.ceil(Math.random()*11)
    const { data: res } = await getRandomShop(num)
    if (res.code != 200) return Toast.fail("服务异常！")
    data.randomShopData = res.data
  }

  onMounted(() => {
    randomShop()
  })

  return data 

}
