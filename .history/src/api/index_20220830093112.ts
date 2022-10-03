import Axios from "axios"
Axios.defaults.baseURL = "https://www.11e.fun/api"

Axios.interceptors.request.use(config=>{
  return config
},err=>{
  console.log(err)
})