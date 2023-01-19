let head = document.getElementById('head');
let neck = document.getElementById('neck');
let body = document.getElementById('body');
let rightArm = document.getElementById('right-arm');
let leftArm = document.getElementById('left-arm');
let rightLeg = document.getElementById('right-leg');
let leftLeg = document.getElementById('left-leg');

let word = getWord();
let display = document.getElementById('display');
let current = display.innerText.split('');
let mistakes = 0;
setup();

function keyPressed(e) {
  key = e.target.innerText.toLowerCase();
  let wordKeys = word.split('');

  if (wordKeys.includes(key)) {
    for (let i = 0; i < wordKeys.length; i++) {
      if (wordKeys[i] === key) {
        current[i] = key;
      } else if (current[i] === undefined) {
        current[i] = '_';
      }
    }
    display.innerText = current.toString().replace(/,/g, '');
    e.target.classList.add('right');

    if (current.toString().replace(/,/g, '') == word) {
      let win = document.getElementById('win');
      win.style = 'display: flex';
    }
  } else {
    e.target.classList.add('disabled');
    mistakes++;
    mistake();
  }
}

function getWord() {
  let words = [
    'backpack',
    'legs',
    'square',
    'zoo',
    'sun',
    'socks',
    'candy',
    'cookie',
    'snowman',
    'pencil',
  ];

  let random = Math.floor(Math.random() * 10);

  return words[random];
}

function setup() {
  head.style = 'display: none';
  neck.style = 'display: none';
  body.style = 'display: none';
  rightArm.style = 'display: none';
  leftArm.style = 'display: none';
  rightLeg.style = 'display: none';
  leftLeg.style = 'display: none';

  let wordRep = word.replace(/./g, '_');
  console.log(word);
  display.innerText = wordRep;
}

let keyboard = document.getElementsByTagName('button');

for (key of keyboard) {
  key.addEventListener('click', keyPressed);
}

function mistake() {
  if (mistakes === 1) {
    head.style = 'display: flex';
  } else if (mistakes === 2) {
    neck.style = 'display: flex';
  } else if (mistakes === 3) {
    body.style = 'display: flex';
  } else if (mistakes === 4) {
    rightArm.style = 'display: flex';
  } else if (mistakes === 5) {
    leftArm.style = 'display: flex';
  } else if (mistakes === 6) {
    rightLeg.style = 'display: flex';
  } else if (mistakes === 7) {
    leftLeg.style = 'display: flex';
  } else {
    let end = document.getElementById('lose');
    end.style = 'display: flex';
  }
}

let playAgain = document.getElementById('again');
playAgain.addEventListener('click', () => {
  location.reload();
});

let playAgain2 = document.getElementById('again2');
playAgain2.addEventListener('click', () => {
  location.reload();
});
