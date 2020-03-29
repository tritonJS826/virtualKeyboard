import renderKeyboard from './renderKeyboard';
import allButtonsArray from './allButtonsArray';


const keyboardBaseState = {
  language: 'en',
  uppercase: false,

  keyboardType() {
    return `${this.language}${((this.uppercase) ? 'Shift' : '')}`;
  },

  changeLanguage() {
    if (this.language === 'en') {
      this.language = 'ru';
    } else {
      this.language = 'en';
    }
  },

  changeUppercase() {
    if (this.uppercase === true || this.uppercase === 'true') {
      this.uppercase = false;
    } else {
      this.uppercase = true;
    }
  },

  renderState(where) {
    document.getElementById(where).innerHTML = `
    <div class="keyboardState" id="keyboardState">
    language:${keyboardBaseState.language}, uppercase: ${keyboardBaseState.uppercase}.<br>
    Переключение -- ctrl + shift<br>
    Специально сбрасываю alt, shift, ctrl, ибо не логично начинать с нажатыми 
    Клавиатура сохранит язык ввода (независимо от языка установленного в ОС)<br>
    Клавиатура сохранит регистр при перезагрузке (для удобства CapsLock оставляю подсвеченным)<br></div>`;
    this.saveKeyboardType();
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

  saveKeyboardType() {
    localStorage.setItem('language', this.language);
    localStorage.setItem('uppercase', this.uppercase);
  },

  loadKeyboardType() {
    this.language = localStorage.getItem('language') ? localStorage.getItem('language') : this.language;
    this.uppercase = (localStorage.getItem('uppercase')) ? localStorage.getItem('uppercase') : this.uppercase;
    renderKeyboard(this.keyboardType(), allButtonsArray, 'keyboard');
    if (this.uppercase === 'true') document.getElementById('capslock').classList.add('pressed');
  },
};


export default keyboardBaseState;
