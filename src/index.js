import _ from 'lodash'; // ES6 import 语法
import './style/index.css'; // loader => css-loader module style-loader
import './style/a.scss'; // loader sass-loader
import axios from 'axios';
import { d, e, f } from '@/b';
import $ from 'jQuery';

function createDomElement() {
  const dom = document.createElement('div');
  dom.innerHTML = _.join(['google.com', ' okay', 'coding'], '');
  // dom.className = 'box';

  dom.classList.add('box');
  return dom;
}

const divDom = createDomElement();

document.body.appendChild(divDom);

console.log(123);

// 发送ajax请求数据
axios.get('/api/compmsglist').then(res => console.log('res:', res));

// ES6代码
class Demo {
  show() {
    console.log('this.Age:', this.Age);
  }

  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + 1;
  }
}

const g = new Demo();
g.Age = 19;
g.show();

const [a, b, c] = [1, 2, 3];
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

console.log('d:', d);
console.log('e:', e);
console.log('f:', f);

$(function() {
  console.log('jQuery');

  $('.box').click(function() {
    alert(1);
  });
});
