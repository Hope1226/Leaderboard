const createForm = () => {
  const addScoreCont = document.createElement('div');
  addScoreCont.classList.add('add-score-section');
  const addScoreForm = document.createElement('form');
  addScoreForm.id = 'add-score-form';
  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Your name';
  inputName.id = 'name-input';
  const inputScore = document.createElement('input');
  inputScore.type = 'number';
  inputScore.placeholder = 'Your score';
  inputScore.id = 'score-input';
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = 'Submit';
  submitBtn.id = 'submit-btn';
  addScoreForm.appendChild(inputName);
  addScoreForm.appendChild(inputScore);
  addScoreForm.appendChild(submitBtn);
  addScoreCont.appendChild(addScoreForm);

  return addScoreCont;
};

export default createForm;