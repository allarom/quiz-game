'use strict';


function Game(parentElement, catalog) {
  var self = this;

  self.currentQuestion = 0;
  self.score = 0;
  
  self.parentElement = parentElement;
  self.catalog = catalog;
  self.name;

  // Creates parent div for static elements score, time, name
  self.gameElement = document.createElement('div');
  self.gameElement.setAttribute('id', 'ga');
  self.staticElement = document.createElement('div');
  self.staticElement.setAttribute('id', 'static-element');

  // DD nothger div here with id static-element

  // Creates name
  var yourName = document.createElement('p');
  yourName.innerText = 'Name: ' + self.name;
  self.gameElement.appendChild(yourName);

  // Creates score
  var yourScore = document.createElement('p');
  yourScore.innerText = 'Score: ' + self.score;
  self.gameElement.appendChild(yourScore);

  // Creates time
  var yourTime = document.createElement('p');
  yourTime.innerText = 'Time: ' + self.time;
  self.gameElement.appendChild(yourTime);

  // 2.3 Appends self.gameElement to #site-main
  self.parentElement.appendChild(self.gameElement);
  // - Score
  // - Name
  // - Time
}

Game.prototype.nextQuestion = function () {
  var self = this;

  var question = self.catalog[self.currentQuestion];

  // Builds the Question
  var questionStage = document.createElement('div');
  questionStage.setAttribute('id', 'question-answer');

  var questionText = document.createElement('h3');
  questionText.innerText = question.prompt;
  questionStage.appendChild(questionText);

  // Current Number of answers
  var numberOfAnswers = question.answers.length;
  for (var x = 0; x < numberOfAnswers; x++) {
    
    // Create Answer Buttons (withg text)
    var answerBtn = document.createElement('button');
    answerBtn.setAttribute('id', 'answer-btn');
    answerBtn.setAttribute('data-x', x);
    answerBtn.innerText = question.answers[x].text;

    // Eventlistener 
    answerBtn.addEventListener('click', function (event) {
      console.log(event.target);
      console.log(event.target.getAttribute('data-x'));
    });

    questionStage.appendChild(answerBtn);
  }

  self.gameElement.appendChild(questionStage);
  
}


// destoty -> self.gameElement.remove()

// 1. Creates DOM Elements 
// -Question <h1>
// - 4 x Answer <buttons> 


 // 2. Append into DOM
 // -> random Position
 // 3. Adds an eventListener to each <Button>
 // 4. 