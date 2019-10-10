import _ from 'lodash';   //ES6 import 语法

function createDomElement() {
  var dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder', '.com', ' wow'], '');
  return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);
