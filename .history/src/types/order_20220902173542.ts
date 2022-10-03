 import {IIndexData} from "./shop"
 interface IOrderDetail {
  createTime:string,
  name:string,
  orderNumber:string,
  totalPrice:string,
  type:string,
}

interface IOrderChildren {
  orderList:IIndexData[],
}
export interface IOrderData extends IOrderDetail{
  orderList?:IOrderChildren[]
}



