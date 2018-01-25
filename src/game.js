'use strict';

var REVEAL_MS = 1000;

function Game(parentElement, catalog, yourName) {
  var self = this;

  
  self.score = 0;
  
  self.parentElement = parentElement;
  self.catalog = catalog;
  self.currentQuestion =0;
  self.name = yourName;

  // Math.floor(Math.random()*self.catalog.length)

  // Creates parent div for static elements score, time, name
  self.gameElement = document.createElement('div');
  self.gameElement.setAttribute('id', 'game-element');
  self.staticElement = document.createElement('div');
  self.staticElement.setAttribute('id', 'static-element');

  // Creates name
  var yourName = document.createElement('p');
  yourName.innerText = 'Name: ' + self.name;
  self.staticElement.appendChild(yourName);

  // Creates score
  self.yourScore = document.createElement('p');
  self.yourScore.innerText = 'Score: ' + self.score;
  self.staticElement.appendChild(self.yourScore);

  // Creates time
  // var yourTime = document.createElement('p');
  // yourTime.innerText = 'Time: ' + self.time;
  // self.staticElement.appendChild(yourTime);

  self.gameElement.appendChild(self.staticElement);
  // 2.3 Appends self.gameElement to #site-main
  self.parentElement.appendChild(self.gameElement);

}


Game.prototype.nextQuestion = function () {
  var self = this;

  self.questionStage.remove();

  self.currentQuestion++;

  if (self.currentQuestion < self.catalog.length) {
    self.buildQuestion();
  }
  else {
    self.finish();
  }
}


Game.prototype.buildQuestion = function () {
  var self = this;

  var question = self.catalog[self.currentQuestion];

  // Builds the Question
  self.questionStage = document.createElement('div');
  self.questionStage.setAttribute('id', 'question-answer');

  var questionText = document.createElement('h3');
  questionText.innerText = question.prompt;
  self.questionStage.appendChild(questionText);


  // Current Number of answers
  var numberOfAnswers = question.answers.length;
  for (var x = 0; x < numberOfAnswers; x++) {
    
    // Create Answer Buttons (with text)
    var answerBtn = document.createElement('button');
    answerBtn.setAttribute('id', 'answer-btn');
    answerBtn.setAttribute('data-x', x);
    answerBtn.innerText = question.answers[x].text;

    // Eventlistener 
    answerBtn.addEventListener('click', function (event) {
      console.log(event.target);
      var answerNumber = event.target.getAttribute('data-x');
      if (question.answers[answerNumber].correct) {
        self.revealAnswer(event.target, true);
      }
      else {
        self.revealAnswer(event.target, false);
      }
    });

    self.questionStage.appendChild(answerBtn);
  }

  self.gameElement.appendChild(self.questionStage);
}


Game.prototype.revealAnswer = function (answerElement, isCorrect) {
  var self = this;

  if (isCorrect){
    self.score++;
    self.yourScore.innerText = 'Score: ' + self.score;
    answerElement.setAttribute('class', 'true-answer');
  } else  {
    self.score--;
    self.yourScore.innerText = 'Score: ' + self.score;
    answerElement.setAttribute('class', 'false-answer');
  }

  window.setTimeout(function () {
    self.nextQuestion();
  }, REVEAL_MS);
};


Game.prototype.onGameOver = function(callback){
  var self = this;
  self.onEndedCallback = callback;
  // self.onEnded()
}
  
Game.prototype.finish = function() {
  var self = this;

  self.onEndedCallback();
};


Game.prototype.destroy = function() {
  var self = this; 
  
  self.gameElement.remove();
};
