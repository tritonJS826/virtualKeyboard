const keyboardBaseState = {
  language: 'en',
  uppercase: false,

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
};


export default keyboardBaseState;
