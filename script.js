console.log('Hello!');
//Knapp for ingang
const enterButton = document.querySelector('#enterButton');
console.log(enterButton);

function enterButtonClick() {
  console.log('knapp Click');

  const home = document.querySelector('#home');
  console.log(home);

  const entry = document.querySelector('#entry');
  console.log(entry);

  const header = document.querySelector('#header');
  console.log(header);

  const footer = document.querySelector('#footer');
  console.log(footer);

  home.classList.add('hidden');
  header.classList.add('hidden');
  footer.classList.add('hidden');
  entry.classList.remove('hidden');
}

enterButton.addEventListener('click', enterButtonClick);

//Knapp for Bozo fra sukkerspinn done
const buttonConsessionsBozo = document.querySelector('#buttonConsessionsBozo');
console.log(buttonConsessionsBozo);

function buttonConsesionsBozoAction() {
  console.log(buttonConsesionsBozoAction);

  const entry = document.querySelector('#entry');
  console.log(entry);

  const bozo = document.querySelector('#bozo');
  console.log(bozo);

  entry.classList.add('hidden');
  bozo.classList.remove('hidden');
}

buttonConsessionsBozo.addEventListener('click', buttonConsesionsBozoAction);

//Knapp for Mann med Skjegg fra sukkerspinn
const buttonConsessionsBeardedMan = document.querySelector(
  '#buttonConsessionsBeardedMan'
);
console.log(buttonConsessionsBeardedMan);

function buttonConsesionsBeardedManAction() {
  console.log(buttonConsesionsBeardedManAction);

  const entry = document.querySelector('#entry');
  console.log(entry);

  const beardedMan = document.querySelector('#beardedMan');
  console.log(beardedMan);

  entry.classList.add('hidden');
  beardedMan.classList.remove('hidden');
}

buttonConsessionsBeardedMan.addEventListener(
  'click',
  buttonConsesionsBeardedManAction
);

//Knapp for bozo til sukkerspinn
const buttonBozoConsesions = document.querySelector('#buttonBozoConsesions');
console.log(buttonBozoConsesions);

function buttonBozoConsesionsAction() {
  console.log(buttonBozoConsesionsAction);

  const entry = document.querySelector('#entry');
  console.log(entry);

  const bozo = document.querySelector('#bozo');
  console.log(bozo);

  bozo.classList.add('hidden');
  entry.classList.remove('hidden');
}

buttonBozoConsesions.addEventListener('click', buttonBozoConsesionsAction);

//Knapp for bozo til sjeggeteman
const buttonBozoBeardedMan = document.querySelector('#buttonBozoBeardedMan');
console.log(buttonBozoBeardedMan);

function buttonBozoBeardedManAction() {
  console.log(buttonBozoBeardedManAction);

  const beardedMan = document.querySelector('#beardedMan');
  console.log(beardedMan);

  const bozo = document.querySelector('#bozo');
  console.log(bozo);

  bozo.classList.add('hidden');
  beardedMan.classList.remove('hidden');
}

buttonBozoBeardedMan.addEventListener('click', buttonBozoBeardedManAction);

//Knapp for Sjeggeteman til sukkerspinn
const buttonBeardedManConsesion = document.querySelector(
  '#buttonBeardedManConsesion'
);
console.log(buttonBeardedManConsesion);

function buttonBeardedManConsesionAction() {
  console.log(buttonBeardedManConsesionAction);

  const beardedMan = document.querySelector('#beardedMan');
  console.log(beardedMan);

  const entry = document.querySelector('#entry');
  console.log(entry);

  beardedMan.classList.add('hidden');
  entry.classList.remove('hidden');
}

buttonBeardedManConsesion.addEventListener(
  'click',
  buttonBeardedManConsesionAction
);

//Knapp for Sjeggeteman til Bozo
const buttonBeardedManBozo = document.querySelector('#buttonBeardedManBozo');
console.log(buttonBeardedManBozo);

function buttonBeardedManBozoAction() {
  console.log(buttonBeardedManBozoAction);

  const beardedMan = document.querySelector('#beardedMan');
  console.log(beardedMan);

  const bozo = document.querySelector('#bozo');
  console.log(bozo);

  beardedMan.classList.add('hidden');
  bozo.classList.remove('hidden');
}

buttonBeardedManBozo.addEventListener('click', buttonBeardedManBozoAction);
