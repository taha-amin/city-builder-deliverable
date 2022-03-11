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
    const newSlogan = sloganInputEl.value;

    slogans.push(newSlogan);

    displaySlogans();

    sloganInputEl.value = '';

});

cityNameInput.addEventListener('input', () => {
    cityNameEl.textContent = cityNameInput.value;
});

castleDropDown.addEventListener('change', () => {
  //increment castle count
    castleCount++;

    castleImageEl.src = `assets/castle-${castleDropDown.value}.png`;
    displayCountStats();
});

skylineDropDown.addEventListener('change', () => {
  //Increment skyline count
    skylineCount++;

    skylineImageEl.src = `assets/skyline-${skylineDropDown.value}.png`;
    displayCountStats();
});

waterfrontDropDown.addEventListener('change', () => {
  //increment waterfront count
    waterfrontCount++;

    waterfrontImageEl.src = `assets/waterfront-${waterfrontDropDown.value}.png`;
    displayCountStats();
});

//Function attaches a string to the DOM describing how many times each dropdown has been changed
function displayCountStats() {
    countMessageEl.textContent = `You changed the castle image ${castleCount} times, the skyline image ${skylineCount} times, and the waterfront image ${waterfrontCount} times.`;
}

//Function clears DOM, loops through the slogans, then displays slogans on the page
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
