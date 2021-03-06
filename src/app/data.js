const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

export const createGame = async () => {
  let gameId;
  await fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      gameId = data.result.split(' ');
      return gameId[3];
    });
  window.localStorage.setItem('loacalId', gameId);
  return gameId;
};

export const addScore = async (userNmae, userScore, id) => {
  await fetch(`${api}/${id}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: userNmae,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const displayData = async (id, conntainer) => {
  const response = await fetch(`${api}/${id}/scores`);
  const data = await response.json();
  const scoreList = data.result;
  const scoreBoard = document.createElement('div');
  scoreBoard.classList.add('scores-container');
  scoreList.forEach((obj) => {
    const userName = obj.user;
    const userScore = obj.score;
    conntainer.innerHTML += `
    <div class="scores"><p>${userName}:</p><span>${userScore}</span></div>`;
  });
};