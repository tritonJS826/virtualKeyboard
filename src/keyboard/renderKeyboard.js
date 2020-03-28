import {
  renderKeyRu,
  renderKeyEn,
  renderKeyRuShift,
  renderKeyEnShift,
} from './key/key';

// какую клаву будем рисовать, массив с клавишами, куда
function renderKeyboard(param, arr, root) {
  if (param === 'ru') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyRu(el, root);
    });
  }
  if (param === 'en') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyEn(el, root);
    });
  }
  if (param === 'ruShift') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyRuShift(el, root);
    });
  }
  if (param === 'enShift') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyEnShift(el, root);
    });
  }
}

export default renderKeyboard;
