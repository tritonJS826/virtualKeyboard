import allButtonsArray from './allButtonsArray';
import keyboardBaseState from './keyboardState';

const pressedModificator = 'key__pressed';
const ENTER = 'enter';
const BACKSPACE = 'Backspace';
const TAB = 'tab';
const SPACE = 'space';
const WIN = 'win';
const CAPSLOCK = 'capslock';
const SHIFT_LEFT = 'ShiftLeft';
const SHIFT_RIGHT = 'ShiftRight';
const CONTROL_LEFT = 'ControlLeft';
const CONTROL_RIGHT = 'ControlRight';
const ALT_LEFT = 'leftAlt';
const ALT_RIGHT = 'rightAlt';


function colorKeyAnim(id) {
  const key = document.getElementById(id);
  const isEnter = (id === ENTER);
  const isBackspace = (id === BACKSPACE);
  const isTab = (id === TAB);
  const isSpace = (id === SPACE);
  const isWin = (id === WIN);
  const isContrl = (id === CONTROL_LEFT || id === CONTROL_RIGHT);
  const isShift = (id === SHIFT_LEFT || id === SHIFT_RIGHT);
  const arrow = (id === 'arrow↑' || id === 'arrow←' || id === 'arrow↓' || id === 'arrow→');
  const isKeyHasComplicateId = (isEnter || isBackspace || isTab || isSpace || isWin || arrow);
  const isSimpleKeyOrDigit = (id.length === 1);
  const isContrlOrShift = (isContrl || isShift);

  if (isSimpleKeyOrDigit || isKeyHasComplicateId || isContrlOrShift) {
    key.animate([{
      background: 'orange',
    },
    {
      background: 'black',
    },
    ], {
      duration: 1000,
      iterations: 1,
    });
  }
}

function addTextInTextarea(text) {
  const textarea = document.getElementById('textarea');
  textarea.setRangeText(text, textarea.selectionStart, textarea.selectionStart, 'end');
  textarea.focus();
}

function printSimpleKey(id) {
  const isSimpleKeyOrDigit = (id.length === 1);
  const key = document.getElementById(id).innerText;

  if (isSimpleKeyOrDigit) {
    addTextInTextarea(key);
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
  colorKeyAnim(firstId);
  colorKeyAnim(secondId);
}

function isContainPressedModificator(id) {
  return document.getElementById(id).classList.contains(pressedModificator);
}

function notSimpleKey(id) {
  const textarea = document.getElementById('textarea');

  if (id === SPACE) {
    addTextInTextarea(' ');
  }
  if (id === ENTER) {
    addTextInTextarea('\n');
  }
  if (id === BACKSPACE) {
    if (textarea.selectionStart !== 0) {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionStart, 'end');
    }
  }
  if (id === TAB) {
    addTextInTextarea('\t');
  }
  if (id === WIN) {
    addTextInTextarea('Что должно произойти?');
  }
  if (id === CAPSLOCK) {
    changeStylePressed(id);
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === SHIFT_LEFT) {
    changeStylePressed(id);
    if (isContainPressedModificator(SHIFT_RIGHT)) {
      changeStylePressed(SHIFT_RIGHT);
      return;
    }
    if (isContainPressedModificator(CONTROL_LEFT)) {
      changePairStyleLang(id, CONTROL_LEFT);
      return;
    }
    if (isContainPressedModificator(CONTROL_RIGHT)) {
      changePairStyleLang(id, CONTROL_RIGHT);
      return;
    }
    // if other shifts and ctrls not pressed
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === SHIFT_RIGHT) {
    changeStylePressed(id);
    if (isContainPressedModificator(SHIFT_LEFT)) {
      changeStylePressed(SHIFT_LEFT);
      return;
    }
    if (isContainPressedModificator(CONTROL_LEFT)) {
      changePairStyleLang(id, CONTROL_LEFT);
      return;
    }
    if (isContainPressedModificator(CONTROL_RIGHT)) {
      changePairStyleLang(id, CONTROL_RIGHT);
      return;
    }
    // if other shifts and ctrls not pressed
    changeUppercase();
    keyboardBaseState.renderKeyboard();
  }
  if (id === CONTROL_LEFT) {
    changeStylePressed(id);
    if (isContainPressedModificator(CONTROL_RIGHT)) {
      changeStylePressed(CONTROL_RIGHT);
    }
    if (isContainPressedModificator(SHIFT_LEFT)) {
      changeUppercase();
      changePairStyleLang(id, SHIFT_LEFT);
      return;
    }
    if (isContainPressedModificator(SHIFT_RIGHT)) {
      changeUppercase();
      changePairStyleLang(id, SHIFT_RIGHT);
    }
    // KILL ANIMATION
    keyboardBaseState.renderKeyboard();
  }
  if (id === CONTROL_RIGHT) {
    changeStylePressed(id);
    if (isContainPressedModificator(CONTROL_LEFT)) {
      changeStylePressed(CONTROL_LEFT);
    }
    if (isContainPressedModificator(SHIFT_LEFT)) {
      changeUppercase();
      changePairStyleLang(id, SHIFT_LEFT);
    }
    if (isContainPressedModificator(SHIFT_RIGHT)) {
      changeUppercase();
      changePairStyleLang(id, SHIFT_RIGHT);
    }
    // KILL ANIMATION
    keyboardBaseState.renderKeyboard();
  }
  if (id === ALT_LEFT) {
    changeStylePressed(id);
    if (isContainPressedModificator(ALT_RIGHT)) {
      changeStylePressed(ALT_RIGHT);
    }
  }
  if (id === ALT_RIGHT) {
    changeStylePressed(id);
    if (isContainPressedModificator(ALT_LEFT)) {
      changeStylePressed(ALT_LEFT);
    }
  }
}


function handlerKeyAndClick(id) {
  colorKeyAnim(id);
  printSimpleKey(id);
  notSimpleKey(id);
}

function keyHandler() {
  document.addEventListener('keydown', (e) => {
    const key = allButtonsArray.find((el) => el.code === e.code);

    if (key) {
      const { id } = key;
      const isArrowPressed = (id.includes('arrow'));

      handlerKeyAndClick(id);
      if (!isArrowPressed) e.preventDefault();
    }
  });
}

function clickHandler() {
  document.getElementById('keyboard').addEventListener('click', ({
    target: { id },
  }) => {
    handlerKeyAndClick(id);
  });
}

export {
  keyHandler,
  clickHandler,
};
