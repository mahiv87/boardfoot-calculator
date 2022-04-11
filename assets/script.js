var thicknessEl = document.querySelector('#thickness');
var widthEl = document.querySelector('#width');
var lengthEl = document.querySelector('#length');
var boardfootEl = document.querySelector('#boardfoot');
var calcBtn = document.querySelector('#calculate-btn');
var boardfootForm = document.querySelector('.boardfoot-calculate');
var savedItemsEl = document.querySelector('#saved-items');
var clearBtn = document.querySelector('#clear-btn');
var itemInput = document.querySelector('#item-input');
var saveItemBtn = document.querySelector('#save-item');

function calculateBdft(event) {
  event.preventDefault();
  var bdftMultiply = thicknessEl.value * widthEl.value * lengthEl.value;
  var bdft = bdftMultiply / 144;
  boardfootEl.innerHTML = bdft + ' bdft';

  clearValues();
}

function clearValues() {
  thicknessEl.value = '';
  widthEl.value = '';
  lengthEl.value = '';
}

calcBtn.addEventListener('click', calculateBdft);

// set the modal menu element
const targetEl = document.getElementById('modalEl');

// options with default values
const options = {
  placement: 'center',
  backdropClasses: 'bg-neutral-900 bg-opacity-50 fixed inset-0 z-40',
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};

const modal = new Modal(targetEl, options);
// show the modal
modal.show();

// hide the modal
modal.hide();
// toggle the modal
// modal.toggle();

function saveItem(event) {
  event.preventDefault();

  console.log(itemInput.value);

  localStorage.setItem('name', itemInput.value + ': ' + boardfootEl.value);
  renderStoredItems();
}

function renderStoredItems() {
  var storedItems = localStorage.getItem('name');

  const item = document.createElement('p');
  item.textContent = storedItems;
  savedItemsEl.appendChild(item);
}


saveItemBtn.addEventListener('click', saveItem);


clearBtn.addEventListener('click', function () {
  localStorage.clear();
  savedItemsEl.innerHTML = '';
});

renderStoredItems();