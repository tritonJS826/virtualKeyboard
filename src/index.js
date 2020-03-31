import addStyles from './style';
import allButtonsArray from './keyboard/allButtonsArray';
import keyboardBaseState from './keyboard/keyboardState';
import renderKeyboard from './keyboard/renderKeyboard';
import onClickKey from './keyboard/onClickKey';


// добавим пару блоков куда будем все рисовать
document.body.innerHTML = `
  <div id="input--field" class="input--field">
    <div class="keyboardState" id="keyboardState">language:${keyboardBaseState.language}, uppercase: ${keyboardBaseState.uppercase}. Переключение -- ctrl + shift</div>
    <textarea class="textarea" id="textarea"></textarea>
  </div>
  <div id="keyboard" class="keyboard"></div>
  ${document.body.innerHTML}`;


addStyles();


const KEYBOARD = 'keyboard';
renderKeyboard('renderKeyEn', allButtonsArray, KEYBOARD);


onClickKey();

// добавить листенеры на клаву (физическую)
// добавить переключение языка
