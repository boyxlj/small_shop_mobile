 interface IOrderDetail {
  createTime:string,
  name:string,
  orderList:string,
  orderNumber:string,
  totalPrice:string,
  type:string,
}


export interface IOrderData extends IOrderDetail{
  orderList?:IOrderDetail[]
}



