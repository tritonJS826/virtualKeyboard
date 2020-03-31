import renderKey from './key/key';

// какую клаву будем рисовать, массив с клавишами, куда
function renderKeyboard(param, arr, root) {
  document.getElementById(root).innerHTML = '';
  arr.forEach((el) => {
    renderKey(param, el, root);
  });
}

export default renderKeyboard;
