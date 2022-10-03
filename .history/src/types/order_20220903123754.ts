 import {IIndexData} from "./shop"
 interface IOrderDetail {
  createTime:string,
  name:string,
  orderNumber:string,
  totalPrice:string,
  type:string,
  detailId:number,
  checked:boolean,
  titleImg:string
}


export interface IOrderData extends IOrderDetail{
  orderList?:IIndexData[]
}

export interface ICarOrderData extends IOrderDetail {

}


