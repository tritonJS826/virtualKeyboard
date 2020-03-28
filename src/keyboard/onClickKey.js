import keyboardBaseState from './keyboardState';

function colorKeyAnim() {
  document.getElementById('keyboard').addEventListener('click', (event) => {
    const {
      id,
      classList,
    } = event.target;
    const isEnter = (id === 'enter');
    const isBackspace = (id === 'backspace');
    const isTab = (id === 'tab');
    const isSpace = (id === 'space');
    const isWin = (id === 'win');
    if (id.length === 1 || isEnter || isBackspace || isTab || isSpace || isWin) {
      classList.add('pressed');
      setTimeout(() => {
        classList.remove('pressed');
      }, 500);
    }
  });
}

function printSimpleKey() {
  document.getElementById('keyboard').addEventListener('click', (event) => {
    if (event.target.id.length === 1) {
      document.getElementById('textarea').value += event.target.innerText;
    }
  });
}

function changeStylePressed(id) {
  const key = document.getElementById(id);
  if (key.classList.contains('pressed')) {
    key.classList.remove('pressed');
  } else {
    key.classList.add('pressed');
  }
}

function changeUppercase() {
  keyboardBaseState.changeUppercase();
  keyboardBaseState.renderState('keyboardState');
  alert('changeUppercase');
}

function changeLanguage() {
  keyboardBaseState.changeLanguage();
  keyboardBaseState.renderState('keyboardState');
  alert('changeLanguage');
}

function notSimpleKey() {
  const textarea = document.getElementById('textarea');
  document.getElementById('keyboard').addEventListener('click', (event) => {
    const {
      id,
    } = event.target;
    if (id === 'space') {
      textarea.value += ' ';
    }
    if (id === 'enter') {
      textarea.value += '\n';
    }
    if (id === 'backspace') {
      textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }
    if (id === 'tab') {
      textarea.value += '\t';
    }
    if (id === 'win') {
      textarea.value += 'Что должно произойти?';
    }
    if (id === 'capslock') {
      changeStylePressed(id);
      changeUppercase();
    }
    if (id === 'leftShift') {
      const isRightShiftPressed = document.getElementById('rightShift').classList.contains('pressed');
      const isLeftCtrlPressed = document.getElementById('leftCtrl').classList.contains('pressed');
      const isRightCtrlPressed = document.getElementById('rightCtrl').classList.contains('pressed');
      changeStylePressed(id);
      if (isRightShiftPressed) {
        changeStylePressed('rightShift');
        return;
      }
      if (isLeftCtrlPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('leftCtrl');
        return;
      }
      if (isRightCtrlPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('rightCtrl');
        return;
      }
      // если ничего другие shifts and contrls не нажаты
      changeUppercase();
    }
    if (id === 'rightShift') {
      const isLeftShiftPressed = document.getElementById('leftShift').classList.contains('pressed');
      const isLeftCtrlPressed = document.getElementById('leftCtrl').classList.contains('pressed');
      const isRightCtrlPressed = document.getElementById('rightCtrl').classList.contains('pressed');
      changeStylePressed(id);
      if (isLeftShiftPressed) {
        changeStylePressed('leftShift');
        return;
      }
      if (isLeftCtrlPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('leftCtrl');
        return;
      }
      if (isRightCtrlPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('rightCtrl');
        return;
      }
      // если никакие другие shifts and contrls не нажаты
      changeUppercase();
    }
    if (id === 'leftCtrl') {
      const isRightCtrlPressed = document.getElementById('rightCtrl').classList.contains('pressed');
      const isLeftShiftPressed = document.getElementById('leftShift').classList.contains('pressed');
      const isRightShiftPressed = document.getElementById('rightShift').classList.contains('pressed');
      changeStylePressed(id);
      if (isRightCtrlPressed) {
        changeStylePressed('rightCtrl');
      }
      if (isLeftShiftPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('leftShift');
      }
      if (isRightShiftPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('rightShift');
      }
    }
    if (id === 'rightCtrl') {
      const isLeftCtrlPressed = document.getElementById('leftCtrl').classList.contains('pressed');
      const isLeftShiftPressed = document.getElementById('leftShift').classList.contains('pressed');
      const isRightShiftPressed = document.getElementById('rightShift').classList.contains('pressed');
      changeStylePressed(id);
      if (isLeftCtrlPressed) {
        changeStylePressed('leftCtrl');
      }
      if (isLeftShiftPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('leftShift');
      }
      if (isRightShiftPressed) {
        changeLanguage();
        changeStylePressed(id);
        changeStylePressed('rightShift');
      }
    }
    if (id === 'leftAlt') {
      const isRightAltPressed = document.getElementById('rightAlt').classList.contains('pressed');
      changeStylePressed(id);
      if (isRightAltPressed) changeStylePressed('rightAlt');
    }
    if (id === 'rightAlt') {
      const isLeftAltPressed = document.getElementById('leftAlt').classList.contains('pressed');
      changeStylePressed(id);
      if (isLeftAltPressed) changeStylePressed('lefttAlt');
    }
  });
}

function onClickKey() {
  colorKeyAnim();
  printSimpleKey();
  notSimpleKey();
}

export default onClickKey;
