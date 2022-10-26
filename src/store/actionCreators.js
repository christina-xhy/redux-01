import * as actionTypes from "./constants";

export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num,
});
// action是对象，可以通过函数封装，在使用的时候直接调用函数，传入参数也就是 修改的数据。

export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num,
});
//接收两个参数，一个是type 类型，另一个则为修改的数据。
