import 'normalize.css';
import './style.css';
import keyboardBaseState from './keyboard/keyboardState';
// import onClickKey from './keyboard/onClickKey';
import { keyHandler, clickHandler } from './keyboard/handler';

document.body.innerHTML = `
  <div id="input--field" class="input--field">
    <div class="keyboardState" id="keyboardState">language:${keyboardBaseState.language}, uppercase: ${keyboardBaseState.uppercase}. Переключение -- ctrl + shift</div>
    <textarea class="textarea" id="textarea"></textarea>
  </div>
  <div id="keyboard" class="keyboard"></div>
  ${document.body.innerHTML}`;


keyboardBaseState.loadKeyboardType();
keyboardBaseState.renderState('keyboardState');
keyboardBaseState.renderKeyboard();


keyHandler();
clickHandler();
