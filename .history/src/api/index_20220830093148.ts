import Axios from "axios"
Axios.defaults.baseURL = "https://www.11e.fun/api"

Axios.interceptors.request.use(config=>{
  return config
},err=>{
  console.log(err)
})

Axios.interceptors.response.use(res=>{
  return res
},err=>{
  console.log(err)
})

export default Axios