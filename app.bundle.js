!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(1),i(6);var n=function(e,t,i){document.getElementById(i).innerHTML+=`<div class="key key__${t.id}" id=${t.id}>${t[e]}</div>`};var r=function(e,t,i){document.getElementById(i).innerHTML="",t.forEach(t=>{n(e,t,i)})};var d=[{id:"`",code:"Backquote",ru:"ё",en:"`",ruShift:"Ё",enShift:"~"},{id:"1",code:"Digit1",ru:"1",en:"1",ruShift:"!",enShift:"!"},{id:"2",code:"Digit2",ru:"2",en:"2",ruShift:"&#34",enShift:"@"},{id:"3",code:"Digit3",ru:"3",en:"3",ruShift:"№",enShift:"#"},{id:"4",code:"Digit4",ru:"4",en:"4",ruShift:";",enShift:"$"},{id:"5",code:"Digit5",ru:"5",en:"5",ruShift:"%",enShift:"%"},{id:"6",code:"Digit6",ru:"6",en:"6",ruShift:":",enShift:"^"},{id:"7",code:"Digit7",ru:"7",en:"7",ruShift:"?",enShift:"&"},{id:"8",code:"Digit8",ru:"8",en:"8",ruShift:"*",enShift:"*"},{id:"9",code:"Digit9",ru:"9",en:"9",ruShift:"(",enShift:"("},{id:"0",code:"Digit0",ru:"0",en:"0",ruShift:")",enShift:")"},{id:"-",code:"Minus",ru:"-",en:"-",ruShift:"_",enShift:"_"},{id:"=",code:"Equal",ru:"=",en:"=",ruShift:"+",enShift:"+"},{id:"Backspace",code:"Backspace",ru:"backspace",en:"backspace",ruShift:"backspace",enShift:"backspace"},{id:"tab",code:"Tab",ru:"↹",en:"↹",ruShift:"↹",enShift:"↹"},{id:"q",code:"KeyQ",ru:"й",en:"q",ruShift:"Й",enShift:"Q"},{id:"w",code:"KeyW",ru:"ц",en:"w",ruShift:"Ц",enShift:"W"},{id:"e",code:"KeyE",ru:"у",en:"e",ruShift:"У",enShift:"E"},{id:"r",code:"KeyR",ru:"к",en:"r",ruShift:"К",enShift:"R"},{id:"t",code:"KeyT",ru:"е",en:"t",ruShift:"Е",enShift:"T"},{id:"y",code:"KeyY",ru:"н",en:"y",ruShift:"Н",enShift:"Y"},{id:"u",code:"KeyU",ru:"г",en:"u",ruShift:"Г",enShift:"U"},{id:"i",code:"KeyI",ru:"ш",en:"i",ruShift:"Ш",enShift:"I"},{id:"o",code:"KeyO",ru:"щ",en:"o",ruShift:"Щ",enShift:"O"},{id:"p",code:"KeyP",ru:"з",en:"p",ruShift:"З",enShift:"P"},{id:"[",code:"BracketLeft",ru:"х",en:"[",ruShift:"Х",enShift:"{"},{id:"]",code:"BracketRight",ru:"ъ",en:"]",ruShift:"Ъ",enShift:"}"},{id:"|",code:"Backslash",ru:"&#92",en:"&#92",ruShift:"/",enShift:"|"},{id:"capslock",code:"CapsLock",ru:"capslock",en:"capslock",ruShift:"capslock",enShift:"capslock"},{id:"a",code:"KeyA",ru:"ф",en:"a",ruShift:"Ф",enShift:"A"},{id:"s",code:"KeyS",ru:"ы",en:"s",ruShift:"Ы",enShift:"S"},{id:"d",code:"KeyD",ru:"в",en:"d",ruShift:"В",enShift:"D"},{id:"f",code:"KeyF",ru:"а",en:"f",ruShift:"А",enShift:"F"},{id:"g",code:"KeyG",ru:"п",en:"g",ruShift:"П",enShift:"G"},{id:"h",code:"KeyH",ru:"р",en:"h",ruShift:"Р",enShift:"H"},{id:"j",code:"KeyJ",ru:"о",en:"j",ruShift:"О",enShift:"J"},{id:"k",code:"KeyK",ru:"л",en:"k",ruShift:"Л",enShift:"K"},{id:"l",code:"KeyL",ru:"д",en:"l",ruShift:"Д",enShift:"L"},{id:";",code:"Semicolon",ru:"ж",en:";",ruShift:"Ж",enShift:":"},{id:"'",code:"Quote",ru:"э",en:"'",ruShift:"Э",enShift:"&#34"},{id:"enter",code:"Enter",ru:"enter",en:"enter",ruShift:"enter",enShift:"enter"},{id:"ShiftLeft",code:"ShiftLeft",ru:"shift",en:"shift",ruShift:"shift",enShift:"shift"},{id:"z",code:"KeyZ",ru:"я",en:"z",ruShift:"Я",enShift:"Z"},{id:"x",code:"KeyX",ru:"ч",en:"x",ruShift:"Ч",enShift:"X"},{id:"c",code:"KeyC",ru:"с",en:"c",ruShift:"С",enShift:"C"},{id:"v",code:"KeyV",ru:"м",en:"v",ruShift:"М",enShift:"V"},{id:"b",code:"KeyB",ru:"и",en:"b",ruShift:"И",enShift:"B"},{id:"n",code:"KeyN",ru:"т",en:"n",ruShift:"Т",enShift:"N"},{id:"m",code:"KeyM",ru:"ь",en:"m",ruShift:"Ь",enShift:"M"},{id:",",code:"Comma",ru:"б",en:",",ruShift:"Б",enShift:"<"},{id:".",code:"Period",ru:"ю",en:".",ruShift:"Ю",enShift:">"},{id:"/",code:"Slash",ru:".",en:"/",ruShift:",",enShift:"?"},{id:"arrow↑",code:"ArrowUp",ru:"↑",en:"↑",ruShift:"↑",enShift:"↑"},{id:"ShiftRight",code:"ShiftRight",ru:"shift",en:"shift",ruShift:"shift",enShift:"shift"},{id:"ControlLeft",code:"ControlLeft",ru:"ctrl",en:"ctrl",ruShift:"ctrl",enShift:"ctrl"},{id:"win",code:"win",ru:"win",en:"win",ruShift:"win",enShift:"win"},{id:"leftAlt",code:"AltLeft",ru:"alt",en:"alt",ruShift:"alt",enShift:"alt"},{id:"space",code:"Space",ru:"space",en:"space",ruShift:"space",enShift:"space"},{id:"rightAlt",code:"AltRight",ru:"alt",en:"alt",ruShift:"alt",enShift:"alt"},{id:"ControlRight",code:"ControlRight",ru:"ctrl",en:"ctrl",ruShift:"ctrl",enShift:"ctrl"},{id:"arrow←",code:"ArrowLeft",ru:"←",en:"←",ruShift:"←",enShift:"←"},{id:"arrow↓",code:"ArrowDown",ru:"↓",en:"↓",ruShift:"↓",enShift:"↓"},{id:"arrow→",code:"ArrowRight",ru:"→",en:"→",ruShift:"→",enShift:"→"}];const o={language:"en",uppercase:!1,keyboardType(){const{language:e,uppercase:t}=this;return`${e}${!0===t?"Shift":""}`},changeLanguage(){"en"===this.language?this.language="ru":this.language="en"},changeUppercase(){this.uppercase=!this.uppercase},renderState(e){document.getElementById(e).innerHTML=`\n    <div class="keyboardState" id="keyboardState">\n    language:${o.language}, uppercase: ${o.uppercase}.<br>\n    Переключение -- ctrl + shift<br>\n    Специально сбрасываю alt, shift, ctrl, ибо не логично начинать с нажатыми\n    Клавиатура сохранит язык ввода (независимо от языка установленного в ОС)<br>\n    Клавиатура сохранит регистр при перезагрузке (для удобства CapsLock оставляю подсвеченным)<br></div>`,this.saveKeyboardType()},renderKeyboard(e=this.keyboardType()){const t=Array.from(document.querySelectorAll(".key__pressed")).map(e=>e.id);r(e,d,"keyboard"),t.forEach(e=>{document.getElementById(e).classList.add("key__pressed")})},saveKeyboardType(){const{language:e,uppercase:t}=this;localStorage.setItem("keyboardType",JSON.stringify({language:e,uppercase:t}))},loadKeyboardType(){if(localStorage.getItem("keyboardType")){const{language:e,uppercase:t}=JSON.parse(localStorage.getItem("keyboardType"));this.language=e||this.language,this.uppercase=t||this.uppercase,r(this.keyboardType(),d,"keyboard"),!0===this.uppercase&&document.getElementById("capslock").classList.add("key__pressed")}}};var c=o;function a(e){const t=document.getElementById(e).classList;t.contains("key__pressed")?t.remove("key__pressed"):t.add("key__pressed")}function u(){c.changeUppercase(),c.renderState("keyboardState")}function f(e,t){c.changeLanguage(),c.renderState("keyboardState"),a(e),a(t),c.renderKeyboard()}function s(e){!function(e){const t=document.getElementById(e);console.log(document.getElementById("↑"));const i="enter"===e||"Backspace"===e||"tab"===e||"space"===e||"win"===e||("arrow↑"===e||"arrow←"===e||"arrow↓"===e||"arrow→"===e);(1===e.length||i)&&t.animate([{background:"orange"},{background:"black"}],{duration:1e3,iterations:1})}(e),function(e){const t=1===e.length,i=document.getElementById("textarea");t&&(i.value+=document.getElementById(e).innerText),t&&i===document.activeElement&&(i.value=i.value.slice(0,i.value.length-1))}(e),function(e){const t=document.getElementById("textarea");if("space"===e&&(t.value+=" "),"enter"===e&&(t.value+="\n"),"Backspace"===e){if(t===document.activeElement)return;t.value=t.value.slice(0,t.value.length-1)}if("tab"===e&&(t.value+="\t"),"win"===e&&(t.value+="Что должно произойти?"),"capslock"===e&&(a(e),u(),c.renderKeyboard()),"ShiftLeft"===e){const t=document.getElementById("ShiftRight").classList.contains("key__pressed"),i=document.getElementById("ControlLeft").classList.contains("key__pressed"),n=document.getElementById("ControlRight").classList.contains("key__pressed");if(a(e),t)return void a("ShiftRight");if(i)return void f(e,"ControlLeft");if(n)return void f(e,"ControlRight");u(),c.renderKeyboard()}if("ShiftRight"===e){const t=document.getElementById("ShiftLeft").classList.contains("key__pressed"),i=document.getElementById("ControlLeft").classList.contains("key__pressed"),n=document.getElementById("ControlRight").classList.contains("key__pressed");if(a(e),t)return void a("ShiftLeft");if(i)return void f(e,"ControlLeft");if(n)return void f(e,"ControlRight");u(),c.renderKeyboard()}if("ControlLeft"===e){const t=document.getElementById("ControlRight").classList.contains("key__pressed"),i=document.getElementById("ShiftLeft").classList.contains("key__pressed"),n=document.getElementById("ShiftRight").classList.contains("key__pressed");if(a(e),t&&a("ControlRight"),i)return u(),void f(e,"ShiftLeft");n&&(u(),f(e,"ShiftRight"))}if("ControlRight"===e){const t=document.getElementById("ControlLeft").classList.contains("key__pressed"),i=document.getElementById("ShiftLeft").classList.contains("key__pressed"),n=document.getElementById("ShiftRight").classList.contains("key__pressed");a(e),t&&a("ControlLeft"),i&&(u(),f(e,"ShiftLeft")),n&&(u(),f(e,"ShiftRight"))}if("leftAlt"===e){const t=document.getElementById("rightAlt").classList.contains("key__pressed");a(e),t&&a("rightAlt")}if("rightAlt"===e){const t=document.getElementById("leftAlt").classList.contains("key__pressed");a(e),t&&a("leftAlt")}}(e)}document.body.innerHTML=`\n  <div id="input--field" class="input--field">\n    <div class="keyboardState" id="keyboardState">language:${c.language}, uppercase: ${c.uppercase}. Переключение -- ctrl + shift</div>\n    <textarea class="textarea" id="textarea"></textarea>\n  </div>\n  <div id="keyboard" class="keyboard"></div>\n  ${document.body.innerHTML}`,c.loadKeyboardType(),c.renderState("keyboardState"),c.renderKeyboard(),document.addEventListener("keydown",({code:e})=>{const{id:t}=d.find(t=>t.code===e);s(t)}),document.getElementById("keyboard").addEventListener("click",({target:{id:e}})=>{s(e)})},function(e,t){},,,,,function(e,t){}]);
//# sourceMappingURL=app.bundle.js.map