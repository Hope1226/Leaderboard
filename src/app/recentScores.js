const renderScoreBoard = () => {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('board-container');
  const header = document.createElement('div');
  header.classList.add('board-header');
  const heading = document.createElement('h2');
  heading.innerHTML = 'Recent Scores';
  const refreshBnt = document.createElement('button');
  refreshBnt.type = 'button';
  refreshBnt.id = 'refreshBtn';
  const scoreBoard = document.createElement('div');
  scoreBoard.id = 'board';
  scoreBoard.classList.add('scores-container');
  scoreBoard.innerHTML = '<a href="#name-input" class="plus-circle"></a>';
  scoreBoard.classList.add('no-refresh');
  header.appendChild(heading);
  header.appendChild(refreshBnt);
  boardContainer.appendChild(header);
  boardContainer.appendChild(scoreBoard);

  return boardContainer;
};

export default renderScoreBoard;