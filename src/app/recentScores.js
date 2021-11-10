const renderScoreBoard = () => {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('board-container');
  const header = document.createElement('div');
  header.classList.add('board-header');
  const heading = document.createElement('h2');
  heading.innerHTML = 'Recent Scores';
  const refreshBnt = document.createElement('button');
  refreshBnt.innerHTML = 'Refresh';
  refreshBnt.type = 'button';
  refreshBnt.id = 'refreshBtn';
  const scoresContainer = document.createElement('div');
  scoresContainer.classList.add('scores-container');
  const scoreTest = document.createElement('div');
  scoreTest.classList.add('scores');
  const name = document.createElement('p');
  name.textContent = 'Player\'s name';
  const score = document.createElement('span');
  score.textContent = '100';
  scoreTest.appendChild(name);
  scoreTest.appendChild(score);
  scoresContainer.appendChild(scoreTest);
  header.appendChild(heading);
  header.appendChild(refreshBnt);
  boardContainer.appendChild(header);
  boardContainer.appendChild(scoresContainer);

  return boardContainer;
};

export default renderScoreBoard;