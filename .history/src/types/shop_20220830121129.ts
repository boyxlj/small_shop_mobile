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


export interface IIndexData extends IIndexDataAll{
  children?:IIndexDataAll[]
}