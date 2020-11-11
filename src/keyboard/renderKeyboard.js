import renderKey from './key/key';


function renderKeyboard(keyboardType, arr, root) {
  document.getElementById(root).innerHTML = '';
  arr.forEach((el) => {
    renderKey(keyboardType, el, root);
  });
}

export default renderKeyboard;
