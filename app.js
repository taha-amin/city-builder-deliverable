// import functions and grab DOM elements
const skylineDropDown = document.getElementById('skyline-dropdown');
const skylineImageEl = document.getElementById('skyline-image');
const sloganInputEl = document.getElementById('slogan-input');
const sloganListEl = document.getElementById('list');
const countEl = document.getElementById('count');

// let state
let skylineCount = 0;
let sloganArray = [];

skylineDropDown.addEventListener('change', () => {
  const id = skylineDropDown.value;

  skylineImageEl.src = `./assets/skyline-${id}.jpeg`;

  skylineCount++;

  countEl.textContent = `You changed the skyline ${skylineCount} times`;
});

sloganButton.addEventListener('click', () => {

  const newSlogan = sloganInputEl.value;

  sloganArray.push(newSlogan);

  sloganListEl.textContent = '';
  for (let slogan of sloganArray) {
    const p = document.createElement('p');

    p.classList.add('slogan');

    p.textContent = slogan;

    sloganListEl.append(p);
  }

  sloganInputEl.value = '';
})

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
