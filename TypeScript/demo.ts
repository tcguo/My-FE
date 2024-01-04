// 所有的类型是静态类型,
let num1: Number = 12;
let str: String = 'asdf';

console.log(str);

function helloTS(name: String) {
  console.log('hello type script, name', name);
}

let add = 'fasdf';

// 更好的写法用 interface
interface Point2 {
  x: number;
  y: number;
}

function demo(data: { x: number; y: number }) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

let aa = '';
