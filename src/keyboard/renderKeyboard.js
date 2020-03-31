import {
  renderKeyRu,
  renderKeyEn,
  renderKeyRuShift,
  renderKeyEnShift,
} from './key/key';


function renderKeyboard(param, arr, root) {
  document.getElementById(root).innerHTML = '';
  if (param === 'renderKeyRu') {
    arr.forEach((el) => {
      renderKeyRu(el, root);
    });
  }
  if (param === 'renderKeyEn') {
    arr.forEach((el) => {
      renderKeyEn(el, root);
    });
  }
  if (param === 'renderKeyRuShift') {
    arr.forEach((el) => {
      renderKeyRuShift(el, root);
    });
  }
  if (param === 'renderKeyEnShift') {
    arr.forEach((el) => {
      renderKeyEnShift(el, root);
    });
  }
}

export default renderKeyboard;
