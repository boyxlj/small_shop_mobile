export interface ISwiper {
  id: number,
  imgs: string
}

export interface IIndexData {
  categoryName: number,
  children: string,
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

// categoryId: 0
// categoryName: "手机"
// children: (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// createTime: "2022-06-12T05:54:00.000Z"
// descs: ""
// detailDesc: ""
// detailId: 6
// parent: null
// prePrice: ""
// price: ""
// title: ""
// titleImg