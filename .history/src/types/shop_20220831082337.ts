interface IIndexDataAll {
  categoryName: number,
  createTime: string,
  descs?: string,
  detailDesc?: string,
  detailId: number,
  parent: null,
  prePrice: string,
  price: string,
  title: string,
  titleImg: string,
}

//首页商品数据
export interface IIndexData extends IIndexDataAll{
  children?:IIndexDataAll[]
}



//单个商品详细信息
interface IShopDetails {
  categoryId:string,
categoryName:string,
createTime:string,
descs:string,
detailDesc:string,
detailId:string,
parent:string,
prePrice:string,
price:string,
title:string,
titleImg:string,
}
// categoryId: 0
// categoryName: ""
// createTime: "2022-07-12T10:32:41.000Z"
// descs: "全新一代骁龙8 双曲屏设计 LTPO屏幕 潜望式长焦摄像头 7P广角主摄 5G "
// detailDesc: "门店有售 荣耀Magic4 全新一代骁龙8 双曲屏设计 LTPO屏幕 潜望式长焦摄像头 7P广角主摄 5G 全网通版 8GB+256GB 瓷青\n【以旧换新至高补贴550元】120Hz-LTPO高刷屏~~查看耀你换新版~查看>"
// detailId: 92
// parent: "6"
// prePrice: "4489"
// price: "4989"
// title: "荣耀Magic4"
// titleImg: "