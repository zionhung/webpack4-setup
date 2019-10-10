import _ from 'lodash';   //ES6 import 语法
import './style/index.css';   //loader => css-loader module style-loader
import './style/a.scss';  //loader sass-loader

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

