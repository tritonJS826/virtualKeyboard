import './style.css';
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


// загрузим данные, если были сохранены
keyboardBaseState.loadKeyboardType();
keyboardBaseState.renderState('keyboardState');
// отрисуем нашу клаву
keyboardBaseState.renderKeyboard();

// обработаем клики
onClickKey();

// обработаем нажатия на клавиши
clickKeyEmulate();
