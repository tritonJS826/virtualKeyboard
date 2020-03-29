import renderKeyboard from './renderKeyboard';
import allButtonsArray from './allButtonsArray';


const keyboardBaseState = {
  language: 'en',
  uppercase: false,

  keyboardType() {
    return (this.language + ((this.uppercase) ? 'Shift' : ''));
  },

  changeLanguage() {
    if (this.language === 'en') {
      this.language = 'ru';
    } else {
      this.language = 'en';
    }
  },
  changeUppercase() {
    if (this.uppercase === true) {
      this.uppercase = false;
    } else {
      this.uppercase = true;
    }
  },
  renderState(where) {
    document.getElementById(where).innerHTML = `<div class="keyboardState" id="keyboardState">language:${keyboardBaseState.language}, uppercase: ${keyboardBaseState.uppercase}. Переключение -- ctrl + shift</div>`;
  },

  // запомним какие были нажаты, перересуем клаву, сделаем нажатыми те, что были
  renderKeyboard(keyboardType = this.keyboardType()) {
    const pressedKeysId = [];
    document.querySelectorAll('.pressed').forEach((el) => pressedKeysId.push(el.id));
    renderKeyboard(keyboardType, allButtonsArray, 'keyboard');
    pressedKeysId.forEach((keyId) => {
      document.getElementById(keyId).classList.add('pressed');
    });
  },
};


export default keyboardBaseState;
