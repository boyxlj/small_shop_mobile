 import {IIndexData} from "./shop"
 interface IOrderDetail {
  createTime:string,
  name:string,
  orderNumber:string,
  totalPrice:string,
  type:string,
  detailId:number,
  isCheck:boolean
}


export interface IOrderData extends IOrderDetail{
  orderList?:IIndexData[]
}



