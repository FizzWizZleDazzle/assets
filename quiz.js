
var quizContent = function() {
  var modal1Overlay = document.createElement('div');
  modal1Overlay.innerHTML = `
    <div class="modal fade" id="quizModal" tabindex="-1" aria-labelledby="quizModalLabel" aria-hidden="true" style="text-align:center;padding-top:100px;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="quizModalLabel">Quiz App</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="quiz" class="quiz"></div>
            <div id="result" class="result"></div>
          </div>
          <div class="modal-footer">
            <button id="submit" class="btn btn-primary">Submit</button>
            <button id="retry" class="btn btn-secondary hide">Retry</button>
            <button id="showAnswer" class="btn btn-secondary hide">Show Answer</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modals').appendChild(modal1Overlay)
};

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
    answer: 'Jupiter',
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    options: ['Brazil', 'Germany', 'France', 'Argentina'],
    answer: 'France',
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
    answer: 'Mount Everest',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: [
      'Pacific Ocean',
      'Indian Ocean',
      'Atlantic Ocean',
      'Arctic Ocean',
    ],
    answer: 'Pacific Ocean',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Cu', 'Fe'],
    answer: 'Au',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: [
      'Pablo Picasso',
      'Vincent van Gogh',
      'Leonardo da Vinci',
      'Michelangelo',
    ],
    answer: 'Leonardo da Vinci',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
    answer: 'Mars',
  },
  {
    question: 'What is the largest species of shark?',
    options: [
      'Great White Shark',
      'Whale Shark',
      'Tiger Shark',
      'Hammerhead Shark',
    ],
    answer: 'Whale Shark',
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answer: 'Lion',
  },
];


  var shuffleArray=function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  var displayQuestion=function() {
    const questionData = quizData[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];

      const optionText = document.createTextNode(shuffledOptions[i]);

      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }

  checkAnswer=function(){
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  },

  displayResult=function(){
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  },

  retryQuiz=function() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  },

  showAnswer = function() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';

    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
    }

    resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
  }

loadlistener = () => {
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
}

removelistener = () => {
  removeEventListener('click', checkAnswer);
  removeEventListener('click', retryQuiz);
  removeEventListener('click', showAnswer);
}


