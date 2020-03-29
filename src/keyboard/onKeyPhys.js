import allButtonsArray from './allButtonsArray';
import keyboardBaseState from './keyboardState';

function colorKeyAnim(id) {
  const key = document.getElementById(id);
  const isEnter = (id === 'enter');
  const isBackspace = (id === 'Backspace');
  const isTab = (id === 'tab');
  const isSpace = (id === 'space');
  const isWin = (id === 'win');
  if (id.length === 1 || isEnter || isBackspace || isTab || isSpace || isWin) {
    key.classList.add('pressed');
    setTimeout(() => {
      key.classList.remove('pressed');
    }, 500);
  }
}


function printSimpleKey(id) {
  const textarea = document.getElementById('textarea');
  if (id.length === 1) {
    textarea.value += document.getElementById(id).innerText;
  }
  if (id.length === 1 && document.getElementById('textarea') === document.activeElement) {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }
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
}

function changeLanguage() {
  keyboardBaseState.changeLanguage();
  keyboardBaseState.renderState('keyboardState');
}

function notSimpleKey(id) {
  const textarea = document.getElementById('textarea');
  if (id === 'space') {
    textarea.value += ' ';
  }
  if (id === 'enter') {
    textarea.value += '\n';
  }
  if (id === 'Backspace') {
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
    keyboardBaseState.renderKeyboard();
  }
  if (id === 'ShiftLeft') {
    const isShiftRightPressed = document.getElementById('ShiftRight').classList.contains('pressed');
    const isControlLeftPressed = document.getElementById('ControlLeft').classList.contains('pressed');
    const isControlRightPressed = document.getElementById('ControlRight').classList.contains('pressed');
    changeStylePressed(id);
    if (isShiftRightPressed) {
      changeStylePressed('ShiftRight');
      return;
    }
    if (isControlLeftPressed) {
      changeLanguage();
      changeStylePressed(id);
      changeStylePressed('ControlLeft');
      keyboardBaseState.renderKeyboard();
      return;
    }
    if (isControlRightPressed) {
      changeLanguage();
      changeStylePressed(id);
      changeStylePressed('ControlRight');
      keyboardBaseState.renderKeyboard();
      return;
    }
    // если ничего другие shifts and contrls не нажаты
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === 'ShiftRight') {
    const isShiftLeftPressed = document.getElementById('ShiftLeft').classList.contains('pressed');
    const isControlLeftPressed = document.getElementById('ControlLeft').classList.contains('pressed');
    const isControlRightPressed = document.getElementById('ControlRight').classList.contains('pressed');
    changeStylePressed(id);
    if (isShiftLeftPressed) {
      changeStylePressed('ShiftLeft');
      return;
    }
    if (isControlLeftPressed) {
      changeLanguage();
      changeStylePressed(id);
      changeStylePressed('ControlLeft');
      keyboardBaseState.renderKeyboard();
      return;
    }
    if (isControlRightPressed) {
      changeLanguage();
      changeStylePressed(id);
      changeStylePressed('ControlRight');
      keyboardBaseState.renderKeyboard();
      return;
    }
    // если никакие другие shifts and contrls не нажаты
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === 'ControlLeft') {
    const isControlRightPressed = document.getElementById('ControlRight').classList.contains('pressed');
    const isShiftLeftPressed = document.getElementById('ShiftLeft').classList.contains('pressed');
    const isShiftRightPressed = document.getElementById('ShiftRight').classList.contains('pressed');
    changeStylePressed(id);
    if (isControlRightPressed) {
      changeStylePressed('ControlRight');
    }
    if (isShiftLeftPressed) {
      changeLanguage();
      changeUppercase();
      changeStylePressed(id);
      changeStylePressed('ShiftLeft');
      keyboardBaseState.renderKeyboard();
    }
    if (isShiftRightPressed) {
      changeLanguage();
      changeUppercase();
      changeStylePressed(id);
      changeStylePressed('ShiftRight');
      keyboardBaseState.renderKeyboard();
    }
  }
  if (id === 'ControlRight') {
    const isControlLeftPressed = document.getElementById('ControlLeft').classList.contains('pressed');
    const isShiftLeftPressed = document.getElementById('ShiftLeft').classList.contains('pressed');
    const isShiftRightPressed = document.getElementById('ShiftRight').classList.contains('pressed');
    changeStylePressed(id);
    if (isControlLeftPressed) {
      changeStylePressed('ControlLeft');
    }
    if (isShiftLeftPressed) {
      changeLanguage();
      changeLanguage();
      changeStylePressed(id);
      changeStylePressed('ShiftLeft');
      keyboardBaseState.renderKeyboard();
    }
    if (isShiftRightPressed) {
      changeLanguage();
      changeLanguage();
      changeStylePressed(id);
      changeStylePressed('ShiftRight');
      keyboardBaseState.renderKeyboard();
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
}


function clickKeyEmulate() {
  document.addEventListener('keydown', (e) => {
    const { id } = allButtonsArray.find((el) => el.code === e.code);
    colorKeyAnim(id);
    printSimpleKey(id);
    notSimpleKey(id);
  });
}


export default clickKeyEmulate;
