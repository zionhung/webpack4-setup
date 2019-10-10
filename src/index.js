import _ from 'lodash';   //ES6 import 语法
import './style/index.css';   //loader => css-loader module style-loader
import './style/a.scss';  //loader sass-loader
import axios from 'axios';

function createDomElement() {
  var dom = document.createElement('div');
  dom.innerHTML = _.join(['google', '.com', ' wow'], '');
  dom.className = 'box';  //用于测试css-loader style-loader
  //dom.classList.add('box');
  return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);

console.log(123);

//发送ajax请求数据
axios.get('/api/compmsglist').then(res => console.log("res:", res));

//ES6代码
class Demo {
  show() {
    console.log('this.Age', this.Age);
  }
  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + 1;
  }
}

let d = new Demo();
d.Age = 19;
d.show();

let [a, b, c] = [1, 2, 3];
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

