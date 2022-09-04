import './style.css';

// debounce
var inputText = document.getElementById('input-text');
var debounceText = document.getElementById('debounce-text');

const updatevalue = () => {
  debounceText.innerHTML = inputText.value;
};

let debouncetimer;
function debounce(callback, timer) {
  window.clearTimeout(debouncetimer);
  debouncetimer = window.setTimeout(callback, timer);
}

inputText.addEventListener('input', () => debounce(updatevalue, 1000));

//throttle
var throttleBtn = document.getElementById('throttle-btn');
var throttleText = document.getElementById('throttle-span');

let cnt = 0;
const updatethrottle = () => {
  cnt += 1;
  throttleText.innerHTML = cnt;
};

let throttleTimer;
function throttle(callback, timer) {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, timer);
}

throttleBtn.addEventListener('click', () => throttle(updatethrottle, 2000));
