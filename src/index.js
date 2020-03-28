import addStyles from './style';
import allButtonsArray from './keyboard/allButtonsArray';
import renderKeyboard from './keyboard/keyboard';

// добавим пару блоков куда будем все рисовать
document.body.innerHTML = `
  <div id="input--field" class="input--field">
    <textarea class="textarea" id="textarea"></textarea>
  </div>
  <div id="keyboard" class="keyboard"></div>
  ${document.body.innerHTML}`;

// стили нормально не подключились, так пока сделаем
addStyles();

// const TEXTAREA = 'textarea';
const KEYBOARD = 'keyboard';
renderKeyboard('renderKeyEn', allButtonsArray, KEYBOARD);
setTimeout(renderKeyboard, 3000, 'renderKeyEnShift', allButtonsArray, KEYBOARD);
setTimeout(renderKeyboard, 7000, 'renderKeyRu', allButtonsArray, KEYBOARD);
setTimeout(renderKeyboard, 11000, 'renderKeyRuShift', allButtonsArray, KEYBOARD);


// добавить листенеры на кнопки -- чтоб печаталось
// добавить аницмации по нажатии
// добавить возможость переключения языка
// добавить листенеры на клаву (физическую)
