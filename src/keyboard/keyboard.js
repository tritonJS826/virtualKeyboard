import {
  renderKeyRu,
  renderKeyEn,
  renderKeyRuShift,
  renderKeyEnShift,
} from './key/key';

// какую клаву будем рисовать, массив с клавишами, куда
function renderKeyboard(param, arr, root) {
  if (param === 'renderKeyRu') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyRu(el, root);
    });
  }
  if (param === 'renderKeyEn') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyEn(el, root);
    });
  }
  if (param === 'renderKeyRuShift') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyRuShift(el, root);
    });
  }
  if (param === 'renderKeyEnShift') {
    document.getElementById(root).innerHTML = '';
    arr.forEach((el) => {
      renderKeyEnShift(el, root);
    });
  }
}

export default renderKeyboard;
