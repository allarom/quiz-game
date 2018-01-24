'use strict';


function Game(parentElement, catalog, yourName) {
  var self = this;

  self.currentQuestion = 0;
  self.score = 0;
  
  self.parentElement = parentElement;
  self.catalog = catalog;
  
  self.name = yourName;

  function getTheName (){
    return yourName;
  }

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
  var yourScore = document.createElement('p');
  yourScore.innerText = 'Score: ' + self.score;
  self.staticElement.appendChild(yourScore);

  // Creates time
  var yourTime = document.createElement('p');
  yourTime.innerText = 'Time: ' + self.time;
  self.staticElement.appendChild(yourTime);

  self.gameElement.appendChild(self.staticElement);
  // 2.3 Appends self.gameElement to #site-main
  self.parentElement.appendChild(self.gameElement);

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
    
    // Create Answer Buttons (with text)
    var answerBtn = document.createElement('button');
    answerBtn.setAttribute('id', 'answer-btn');
    answerBtn.setAttribute('data-x', x);
    answerBtn.innerText = question.answers[x].text;

    // Eventlistener 
    answerBtn.addEventListener('click', function (event) {
      console.log(event.target);
      console.log(event.target.getAttribute('data-x'));
      answerClick() 
    });

    var trueOrFalse = question.answers[x].correct;

    // var firstAnswer = document.querySelector('button[data-x="1"]');
    var firstAnswer = question.answers[0].correct;
    var secondAnswer = question.answers[1].correct;
    var thirdAnswer = question.answers[2].correct;
    var fourthAnswer = question.answers[3].correct;
    
    /////////////////////////////////////////////////////
    // Answer click function
    function answerClick() {
      
      if (firstAnswer, secondAnswer ,thirdAnswer , fourthAnswer ){
        event.target.setAttribute('class', 'true-answer');
      } else if (firstAnswer === false || secondAnswer === false || thirdAnswer === false || fourthAnswer === false ){
        event.target.setAttribute('class', 'false-answer');
      } else {
        return;
      }
     

    }
    /////////////////////////////////////////////////////

    questionStage.appendChild(answerBtn);
  }

  self.gameElement.appendChild(questionStage);
  
}


// destroy  -> self.gameElement.remove()


 // 3. Adds an eventListener to each <Button>
