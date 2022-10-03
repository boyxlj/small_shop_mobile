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

type TList = {
  children:IIndexDataAll[]
}

export interface IIndexData extends IIndexDataAll{
  children?:IIndexDataAll[]
}