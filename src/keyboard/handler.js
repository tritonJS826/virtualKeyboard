import allButtonsArray from './allButtonsArray';
import keyboardBaseState from './keyboardState';

const pressedModificator = 'key__pressed';

function colorKeyAnim(id) {
  const key = document.getElementById(id);
  const isEnter = (id === 'enter');
  const isBackspace = (id === 'Backspace');
  const isTab = (id === 'tab');
  const isSpace = (id === 'space');
  const isWin = (id === 'win');
  const arrow = (id === '↑ ' || id === '← ' || id === '↓ ' || id === '→ ');
  const isKeyHasComplicateId = (isEnter || isBackspace || isTab || isSpace || isWin || arrow);
  const isSimpleKeyOrDigit = (id.length === 1);

  if (isSimpleKeyOrDigit || isKeyHasComplicateId) {
    // remove setTimeout -> animation
    key.classList.add(pressedModificator);
    setTimeout(() => {
      key.classList.remove(pressedModificator);
    }, 500);
  }
}


function printSimpleKey(id) {
  const isSimpleKeyOrDigit = (id.length === 1);
  const textarea = document.getElementById('textarea');
  if (isSimpleKeyOrDigit) {
    textarea.value += document.getElementById(id).innerText;
  }
  if (isSimpleKeyOrDigit && textarea === document.activeElement) {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }
}

function changeStylePressed(id) {
  const keyClassList = document.getElementById(id).classList;
  if (keyClassList.contains(pressedModificator)) {
    keyClassList.remove(pressedModificator);
  } else {
    keyClassList.add(pressedModificator);
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

function changePairStyleLang(firstId, secondId) {
  changeLanguage();
  changeStylePressed(firstId);
  changeStylePressed(secondId);
  keyboardBaseState.renderKeyboard();
}

function notSimpleKey(id) {
  const textarea = document.getElementById('textarea');
  const space = 'space';
  const enter = 'enter';
  const backspace = 'Backspace';
  const tab = 'tab';
  const win = 'win';
  const capsLock = 'capslock';
  const shiftLeft = 'ShiftLeft';
  const shiftRight = 'ShiftRight';
  const controlLeft = 'ControlLeft';
  const controlRight = 'ControlRight';
  const leftAlt = 'leftAlt';
  const rightAlt = 'rightAlt';
  if (id === space) {
    textarea.value += ' ';
  }
  if (id === enter) {
    textarea.value += '\n';
  }
  if (id === backspace) {
    if (textarea === document.activeElement) return;
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }
  if (id === tab) {
    textarea.value += '\t';
  }
  if (id === win) {
    textarea.value += 'Что должно произойти?';
  }
  if (id === capsLock) {
    changeStylePressed(id);
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === shiftLeft) {
    const isShiftRightPressed = document.getElementById(shiftRight)
      .classList.contains(pressedModificator);
    const isControlLeftPressed = document.getElementById(controlLeft)
      .classList.contains(pressedModificator);
    const isControlRightPressed = document.getElementById(controlRight)
      .classList.contains(pressedModificator);
    changeStylePressed(id);
    if (isShiftRightPressed) {
      changeStylePressed(shiftRight);
      return;
    }
    if (isControlLeftPressed) {
      changePairStyleLang(id, controlLeft);
      return;
    }
    if (isControlRightPressed) {
      changePairStyleLang(id, controlRight);
      return;
    }
    // if other shifts and ctrls not pressed
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === shiftRight) {
    const isShiftLeftPressed = document.getElementById(shiftLeft)
      .classList.contains(pressedModificator);
    const isControlLeftPressed = document.getElementById(controlLeft)
      .classList.contains(pressedModificator);
    const isControlRightPressed = document.getElementById(controlRight)
      .classList.contains(pressedModificator);
    changeStylePressed(id);
    if (isShiftLeftPressed) {
      changeStylePressed(shiftLeft);
      return;
    }
    if (isControlLeftPressed) {
      changePairStyleLang(id, controlLeft);
      return;
    }
    if (isControlRightPressed) {
      changePairStyleLang(id, controlRight);
      return;
    }
    // если никакие другие shifts and contrls не нажаты
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === controlLeft) {
    const isControlRightPressed = document.getElementById(controlRight)
      .classList.contains(pressedModificator);
    const isShiftLeftPressed = document.getElementById(shiftLeft)
      .classList.contains(pressedModificator);
    const isShiftRightPressed = document.getElementById(shiftRight)
      .classList.contains(pressedModificator);
    changeStylePressed(id);
    if (isControlRightPressed) {
      changeStylePressed(controlRight);
    }
    if (isShiftLeftPressed) {
      changeUppercase();
      changePairStyleLang(id, shiftLeft);
      return;
    }
    if (isShiftRightPressed) {
      changeUppercase();
      changePairStyleLang(id, shiftRight);
    }
  }
  if (id === controlRight) {
    const isControlLeftPressed = document.getElementById(controlLeft)
      .classList.contains(pressedModificator);
    const isShiftLeftPressed = document.getElementById(shiftLeft)
      .classList.contains(pressedModificator);
    const isShiftRightPressed = document.getElementById(shiftRight)
      .classList.contains(pressedModificator);
    changeStylePressed(id);
    if (isControlLeftPressed) {
      changeStylePressed(controlLeft);
    }
    if (isShiftLeftPressed) {
      changeUppercase();
      changePairStyleLang(id, shiftLeft);
    }
    if (isShiftRightPressed) {
      changeUppercase();
      changePairStyleLang(id, shiftRight);
    }
  }
  if (id === leftAlt) {
    const isRightAltPressed = document.getElementById(rightAlt)
      .classList.contains(pressedModificator);
    changeStylePressed(id);
    if (isRightAltPressed) changeStylePressed(rightAlt);
  }
  if (id === rightAlt) {
    const isLeftAltPressed = document.getElementById(leftAlt)
      .classList.contains(pressedModificator);
    changeStylePressed(id);
    if (isLeftAltPressed) changeStylePressed(leftAlt);
  }
}

function handlerKeyAndClick(id) {
  colorKeyAnim(id);
  printSimpleKey(id);
  notSimpleKey(id);
}

function keyHandler() {
  document.addEventListener('keydown', ({
    code,
  }) => {
    const {
      id,
    } = allButtonsArray.find((el) => el.code === code);
    handlerKeyAndClick(id);
  });
}

function clickHandler() {
  document.getElementById('keyboard').addEventListener('click', ({ target: { id } }) => {
    handlerKeyAndClick(id);
  });
}

export { keyHandler, clickHandler };
