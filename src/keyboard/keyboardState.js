import renderKeyboard from './renderKeyboard';
import allButtonsArray from './allButtonsArray';


const enLanguage = 'en';
const ruLanguage = 'ru';
const baseUppercase = false;

const keyboardBaseState = {
  language: enLanguage,
  uppercase: baseUppercase,

  keyboardType() {
    const {
      language,
      uppercase,
    } = this;
    const isUppercase = (uppercase === true);
    return `${language}${isUppercase ? 'Shift' : ''}`;
  },

  changeLanguage() {
    if (this.language === enLanguage) {
      this.language = ruLanguage;
    } else {
      this.language = enLanguage;
    }
  },

  changeUppercase() {
    this.uppercase = !this.uppercase;
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

  renderKeyboard(keyboardType = this.keyboardType()) {
    const elems = document.querySelectorAll('.key__pressed');
    const pressedKeysId = elems.map((el) => el.id);
    renderKeyboard(keyboardType, allButtonsArray, 'keyboard');
    pressedKeysId.forEach((keyId) => {
      document.getElementById(keyId).classList.add('key__pressed');
    });
  },

  saveKeyboardType() {
    const {
      language,
      uppercase,
    } = this;
    localStorage.setItem('keyboardType', JSON.stringify({
      language,
      uppercase,
    }));
  },

  loadKeyboardType() {
    if (localStorage.getItem('keyboardType')) {
      const {
        language,
        uppercase,
      } = JSON.parse(localStorage.getItem('keyboardType'));
      this.language = language || this.language;
      this.uppercase = uppercase || this.uppercase;
      renderKeyboard(this.keyboardType(), allButtonsArray, 'keyboard');
      if (this.uppercase === true) {
        document.getElementById('capslock').classList.add('key__pressed');
      }
    }
  },
};


export default keyboardBaseState;
