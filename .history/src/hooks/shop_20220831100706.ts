import { onMounted, reactive, toRaw } from "vue";
import { getRandomShop } from "@/api/request"
import { Toast } from "vant";
export function useGetRandomShop() {
  // const randomShopData = ref([])
  // const state = ref(false)
  const data = reactive({
    randomShopData:[],
    state:false
  })
  const randomShop = async () => {
    const { data: res } = await getRandomShop(10)
    if (res.code != 200) return Toast.fail("服务异常！")
    data.randomShopData = res.data
    // console.log("随机商品数据：",toRaw(randomShopData.value))
    data.state = true
  }

  onMounted(() => {
    randomShop()
  })


  return { randomShopData, state }

}
