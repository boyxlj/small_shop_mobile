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
export interface IIndexData extends IIndexDataAll {
  children?: IIndexDataAll[]
}





//单个商品详细信息
export interface IShopDetails {
  categoryId: number,
  categoryName: string,
  createTime: string,
  descs: string,
  detailDesc: string,
  detailId: number,
  parent: string,
  prePrice: string,
  price: string,
  title: string,
  titleImg: string,
}
