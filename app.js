// import functions and grab DOM elements
const cityNameInput = document.getElementById('city-name-input');
const cityNameEl = document.getElementById('city-name');
const castleDropDown = document.getElementById('castle-dropdown');
const skylineDropDown = document.getElementById('skyline-dropdown');
const waterfrontDropDown = document.getElementById('waterfront-dropdown');

const countMessageEl = document.getElementById('count-message');

const castleImageEl = document.getElementById('castle-img');
const skylineImageEl = document.getElementById('skyline-img');
const waterfrontImageEl = document.getElementById('waterfront-img');

const addSloganButton = document.getElementById('add-slogan-button');
const sloganInputEl = document.getElementById('slogan-input');

// let state
let castleCount = 0;
let skylineCount = 0;
let waterfrontCount = 0;

const slogans = [];

//set event listeners
addSloganButton.addEventListener('click', () => {

});

cityNameInput.addEventListener('input', () => {

});

castleDropDown.addEventListener('change', () => {

});

skylineDropDown.addEventListener('change', () => {

});

waterfrontDropDown.addEventListener('change', () => {

});

function displayCountStats() {
  countMessageEl.textContent = `You changed the castle image ${castleCount} times, the skyline image ${skylineCount} times, and the waterfront image ${waterfrontCount} times.`;
}

function displaySlogans() {
  const listEl = document.getElementById('list');

  listEl.textContent = '';

  for (let slogan of slogans) {
    const pTag = document.createElement('p');

    pTag.classList.add('slogan');
    pTag.textContent = slogan;

    //append this NEW element to an OLD element
    listEl.append(pTag);
  }
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
