import './style.scss';
import renderScoreBoard from './app/recentScores.js';
import createForm from './app/addScore.js';
import * as data from './app/data.js';

let gameID = '';

if(localStorage.getItem('loacalId')){
  gameID = localStorage.getItem('loacalId');
}
else {
  gameID = data.createGame()
};

const appContainer = document.querySelector('.app-container');
appContainer.appendChild(renderScoreBoard());
appContainer.appendChild(createForm());
const board = document.querySelector('.board-container');
const waitingBoard = document.querySelector('#waiting');
const form = document.querySelector('#add-score-form');
const nameInt = document.querySelector('#name-input');
const scoreInt =document.querySelector('#score-input');
const refreshBtn = document.querySelector('#refreshBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  data.addScore(nameInt.value, scoreInt.value, gameID);
  form.reset();
})

const populateBoard = async () => {
  const boardScores = await data.displayData(gameID);
  board.appendChild(boardScores);
  waitingBoard.style.display = 'none';
};

refreshBtn.addEventListener('click', () => {
  populateBoard()
})
