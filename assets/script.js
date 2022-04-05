var thicknessEl = document.querySelector('#thickness');
var widthEl = document.querySelector('#width');
var lengthEl = document.querySelector('#length');
var boardfootEl = document.querySelector('#boardfoot');
var calcBtn = document.querySelector('#calculate-btn');
var boardfootForm = document.querySelector('.boardfoot-calculate');

function calculateBdft() {
  var bdftMultiply = thicknessEl.value * widthEl.value * lengthEl.value;

  var bdft = bdftMultiply / 144;

  boardfootEl.innerHTML = bdft + ' bdft';
}

calcBtn.addEventListener('click', calculateBdft);