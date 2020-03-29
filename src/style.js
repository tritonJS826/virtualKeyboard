function addStyles() {
  const style = document.createElement('style');
  style.innerHTML = `

  body {
    padding: 20vh 25vw;
    transition: all 0.5s;
  }

  * {
    transition: all 0.5s;
  }

  .input--field {
    width:700px;
  }

  .textarea {
    width: 99%;
    height: 250px;
    background: black;
    color:white;
    font-size: 20pt;
  }

  .keyboard {
    display: flex;
    width: 700px;
    flex-wrap:wrap;
    justify-content:space-between;
    background:darkgrey;
  }

  .key {
    display:flex;
    justify-content: center;
    align-items: center;
    background: black;
    color:white;
    height: 30px;
    margin: 2px;
    min-width:41px;
    border-radius:3px;
  }

  .enter {
    min-width: 90px;
  }

  .shift {
    min-width:100px;
  }
  .space {
    min-width:310px;
  }

  .ShiftLeft {
    min-width: 115px;
  }

  .pressed {
    background: orange;
  }
  @keyframes onpress {
  from {
    background:orange;
  }

  to {
    background:black;
  }
}


  `;

  document.head.appendChild(style);
}

export default addStyles;
