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
  const waitingBoard = document.createElement('div');
  waitingBoard.id = 'waiting';
  waitingBoard.classList.add('scores-container');
  waitingBoard.innerHTML = 'Loading....'
  header.appendChild(heading);
  header.appendChild(refreshBnt);
  boardContainer.appendChild(header);
  boardContainer.appendChild(waitingBoard);

  return boardContainer;
};

export default renderScoreBoard;