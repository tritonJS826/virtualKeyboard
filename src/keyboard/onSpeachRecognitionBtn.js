const EN_LANGUAGE = 'en';
const RU_LANGUAGE = 'ru';

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.continuous = true;

// This runs when the speech recognition service returns result

const myRecognition = {
  textAreaId: 'textarea',
  recognition,

  setTextAreaId(newTextAreaId) {
    this.textAreaId = newTextAreaId;
  },

  changeLang(lang) {
    if (lang === EN_LANGUAGE) {
      recognition.lang = 'en-US';
    }
    if (lang === RU_LANGUAGE) {
      recognition.lang = 'ru';
    }
  },

  start() {
    recognition.start();
  },

  stop() {
    recognition.stop();
  },

  onResult(event) {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');
    document.getElementById(this.textAreaId).innerHTML = transcript;
  },
};

recognition.onstart = () => {
  console.log('We are listening. Try speaking into the microphone.');
  console.log(`language: ${recognition.lang}`);
};

recognition.onend = () => {
  console.log('Speech recognition service disconnected');
};

recognition.onspeechend = () => {
  console.log('!');
};

recognition.onresult = (event) => {
  myRecognition.onResult(event);
};

export default myRecognition;
