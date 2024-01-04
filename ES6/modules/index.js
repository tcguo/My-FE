// 以前 CommonJS, AMD
// ES6 Module
// 主要功能：export， import

// export用于规定模块的对外接口
// import用于输入其他模块提供的功能
// 一个模块就是一个独立的文件

// export 可以抛出多个对象
// 导出一个变量
export const MyName = '郭xx';
// 导出一个函数
export function ssayName() {
  //
  return MyName + '123';
}
function ssayName2() {
  return MyName;
}
export { ssayName2 }; // 一定要用一个对象把它包裹起来

// 导出一个默认对象
const entryUtil = {
  md5(str) {
    return str + 'do md5';
  },
  base64(str) {
    return str + 'do hash1';
  },
};
export default entryUtil; //只能导出一个
