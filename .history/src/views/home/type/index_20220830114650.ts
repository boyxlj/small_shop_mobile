export interface ISwiper {
  id: number,
  imgs: string
}

interface IIndexDataAll {
  categoryName: number,
  // children: string,
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

