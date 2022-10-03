 interface IOrderDetail {
  createTime:string,
  name:string,
  orderList:string,
  orderNumber:string,
  totalPrice:string,
  type:string,

}


export interface IOrder extends IOrderDetail{
  orderList?:IOrderDetail[]
}



