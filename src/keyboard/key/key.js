function renderKeyRu(key, root) {
  document.getElementById(
    root
  ).innerHTML += `<div class="key key__${key.ru} key" id=${key.en}>${key.ru}</div>`;
}

function renderKeyEn(key, root) {
  document.getElementById(
    root
  ).innerHTML += `<div class="key key__${key.en} key" id="${key.en}">${key.en}</div>`;
}

function renderKeyRuShift(key, root) {
  document.getElementById(
    root
  ).innerHTML += `<div class="key key__${key.ruShift} key" id="${key.en}">${key.ruShift}</div>`;
}

function renderKeyEnShift(key, root) {
  document.getElementById(
    root
  ).innerHTML += `<div class="key key__${key.enShift} key" id="${key.en}">${key.enShift}</div>`;
}

export { renderKeyRu, renderKeyEn, renderKeyRuShift, renderKeyEnShift };
