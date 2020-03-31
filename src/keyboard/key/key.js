function renderKeyRu(key, root) {
  document.getElementById(root).innerHTML += `<div class="key key__${key.id}" id=${key.id}>${key.ru}</div>`;
}

function renderKeyEn(key, root) {
  document.getElementById(root).innerHTML += `<div class="key key__${key.id}" id="${key.id}">${key.en}</div>`;
}

function renderKeyRuShift(key, root) {
  document.getElementById(root).innerHTML += `<div class="key key__${key.id}" id="${key.id}">${key.ruShift}</div>`;
}

function renderKeyEnShift(key, root) {
  document.getElementById(root).innerHTML += `<div class="key key__${key.id}" id="${key.id}">${key.enShift}</div>`;
}

export {
  renderKeyRu,
  renderKeyEn,
  renderKeyRuShift,
  renderKeyEnShift,
};
