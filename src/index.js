import './style.scss';
import renderScoreBoard from './app/recentScores.js';
import createForm from './app/addScore.js';
import { displayData } from './app/data.js';

const appContainer = document.querySelector('.app-container');
appContainer.appendChild(renderScoreBoard());
appContainer.appendChild(createForm());
const board = document.querySelector('.board-container');
const waitingBoard = document.querySelector('#waiting');

const populateBoard = async () => {
  const boardScores = await displayData();
  board.appendChild(boardScores);
  waitingBoard.style.display = 'none';
}

populateBoard()