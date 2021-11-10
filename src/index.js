import './style.scss';
import renderScoreBoard from './app/recentScores.js';
import createForm from './app/addScore.js';

const appContainer = document.querySelector('.app-container');
appContainer.appendChild(renderScoreBoard());
appContainer.appendChild(createForm());