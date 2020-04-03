import renderKeyboard from './renderKeyboard';
import allButtonsArray from './allButtonsArray';


const EN_LANGUAGE = 'en';
const RU_LANGUAGE = 'ru';
const baseUppercase = false;

const keyboardBaseState = {
  language: EN_LANGUAGE,
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
    if (this.language === EN_LANGUAGE) {
      this.language = RU_LANGUAGE;
    } else {
      this.language = EN_LANGUAGE;
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
    Специально сбрасываю alt, shift, ctrl, при при перезагрузке, ибо не логично начинать с нажатыми
    Клавиатура сохранит язык ввода (независимо от языка установленного в ОС)<br>
    Клавиатура сохранит регистр при перезагрузке (для удобства CapsLock оставляю подсвеченным)<br></div>
    Функциональные клавиши, которые подразумевают, что их будут держать нажатыми (alt, shift, ctrl)
    будут активными при единичном нажатии, т.к. это виртуальная клава`;
    this.saveKeyboardType();
  },

  renderKeyboard(keyboardType = this.keyboardType()) {
    const pressedKeysId = [...document.querySelectorAll('.key__pressed')].map((el) => el.id);

    renderKeyboard(keyboardType, allButtonsArray, 'keyboard');
    pressedKeysId.forEach((keyId) => {
      document.getElementById(keyId).classList.add('key__pressed');
    });
  },

  saveKeyboardType() {
    const { language, uppercase } = this;

    localStorage.setItem('keyboardType', JSON.stringify({
      language,
      uppercase,
    }));
  },

  loadKeyboardType() {
    const keyboardType = localStorage.getItem('keyboardType');

    if (keyboardType) {
      const {
        language,
        uppercase,
      } = JSON.parse(keyboardType);

      this.language = language || this.language;
      this.uppercase = uppercase || this.uppercase;

      renderKeyboard(keyboardType, allButtonsArray, 'keyboard');
      if (this.uppercase === true) {
        document.getElementById('capslock').classList.add('key__pressed');
      }
    }
  },
};


export default keyboardBaseState;
