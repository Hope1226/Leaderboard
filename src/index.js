import './style.scss';
import renderScoreBoard from './app/recentScores.js';

const appContainer = document.querySelector('.app-container');
appContainer.appendChild(renderScoreBoard());