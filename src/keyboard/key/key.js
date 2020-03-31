function renderKey(type, key, root) {
  const ROOT = document.getElementById(root);
  ROOT.innerHTML += `<div class="key key__${key.id}" id=${key.id}>${key[type]}</div>`;
}

export default renderKey;
