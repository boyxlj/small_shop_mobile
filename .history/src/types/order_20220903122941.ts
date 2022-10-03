 import {IIndexData} from "./shop"
 interface IOrderDetail {
  createTime:string,
  name:string,
  orderNumber:string,
  totalPrice:string,
  type:string,
}


export interface IOrderData extends IOrderDetail{
  orderList?:IIndexData[]
}



