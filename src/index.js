import addStyles from './style';
import allButtonsArray from './keyboard/allButtonsArray';
import keyboardBaseState from './keyboard/keyboardState';
import onClickKey from './keyboard/onClickKey';
import clickKeyEmulate from './keyboard/onKeyPhys';


// добавим пару блоков куда будем все рисовать
document.body.innerHTML = `
  <div id="input--field" class="input--field">
    <div class="keyboardState" id="keyboardState">language:${keyboardBaseState.language}, uppercase: ${keyboardBaseState.uppercase}. Переключение -- ctrl + shift</div>
    <textarea class="textarea" id="textarea"></textarea>
  </div>
  <div id="keyboard" class="keyboard"></div>
  ${document.body.innerHTML}`;

// стили нормально не подключились, так пока сделаем
addStyles();


const KEYBOARD = 'keyboard';
keyboardBaseState.renderKeyboard('en', allButtonsArray, KEYBOARD);

// обработаем клики
onClickKey();

// обработаем нажатия на клавиши
clickKeyEmulate();

// добавить сохранение состояния еще осталось
