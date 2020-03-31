import keyboardBaseState from './keyboardState';

function colorKeyAnim() {
  document.getElementById('keyboard').addEventListener('click', (event) => {
    const {
      id,
      classList,
    } = event.target;
    const isEnter = (id === 'enter');
    const isBackspace = (id === 'Backspace');
    const isTab = (id === 'tab');
    const isSpace = (id === 'space');
    const isWin = (id === 'win');
    const arrow = (id === '↑ ' || id === '← ' || id === '↓ ' || id === '→ ');
    if (id.length === 1 || isEnter || isBackspace || isTab || isSpace || isWin || arrow) {
      classList.add('key__pressed');
      setTimeout(() => {
        classList.remove('key__pressed');
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
  if (key.classList.contains('key__pressed')) {
    key.classList.remove('key__pressed');
  } else {
    key.classList.add('key__pressed');
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
      const isShiftRightPressed = document.getElementById('ShiftRight').classList.contains('key__pressed');
      const isControlLeftPressed = document.getElementById('ControlLeft').classList.contains('key__pressed');
      const isControlRightPressed = document.getElementById('ControlRight').classList.contains('key__pressed');
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
      const isShiftLeftPressed = document.getElementById('ShiftLeft').classList.contains('key__pressed');
      const isControlLeftPressed = document.getElementById('ControlLeft').classList.contains('key__pressed');
      const isControlRightPressed = document.getElementById('ControlRight').classList.contains('key__pressed');
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
      const isControlRightPressed = document.getElementById('ControlRight').classList.contains('key__pressed');
      const isShiftLeftPressed = document.getElementById('ShiftLeft').classList.contains('key__pressed');
      const isShiftRightPressed = document.getElementById('ShiftRight').classList.contains('key__pressed');
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
      const isControlLeftPressed = document.getElementById('ControlLeft').classList.contains('key__pressed');
      const isShiftLeftPressed = document.getElementById('ShiftLeft').classList.contains('key__pressed');
      const isShiftRightPressed = document.getElementById('ShiftRight').classList.contains('key__pressed');
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
      const isRightAltPressed = document.getElementById('rightAlt').classList.contains('key__pressed');
      changeStylePressed(id);
      if (isRightAltPressed) changeStylePressed('rightAlt');
    }
    if (id === 'rightAlt') {
      const isLeftAltPressed = document.getElementById('leftAlt').classList.contains('key__pressed');
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
