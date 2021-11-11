const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'Zl4d7IVkemOTTVg2fUdz';
const apiUrl = `${api}games/${gameID}/scores/`;

const getData = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

export const displayData = async () => {
  const data = await getData();
  const scoreList = data.result;
  const scoreBoard = document.createElement('div');
  scoreBoard.classList.add('scores-container');
  scoreList.forEach(obj => {
    let userName = obj.user;
    let userScore = obj.score;
    
    scoreBoard.innerHTML += `
    <div class="scores"><p>${userName}:</p><span>${userScore}</span></div>`
  });

  return scoreBoard;
};