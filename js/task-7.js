const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const setTextSize = () => {
    text.style.fontSize = `${parseInt(`${fontSizeControl.value}`)}px`;
  };


fontSizeControl.addEventListener('input', setTextSize);