'use strict';


function main() {

  var yourName=[];
  var score = 0;
  
  var mainElement = document.querySelector('#site-main');

  // @todo create/destroy the game instance
  var game;
  var stage;

  // @todo capture user name
  // var name;

  // @todo ranking
  //var ranking = [];

  // 1. Start Screen

  var startScreen;
  var startButton;
  var countDownScreen;
  var gameScreen;
  

  function pushName (name){
    yourName.push(document.getElementById("name").value);
  }

  var startClick = function () {
    pushName();
    // @todo capture user name = yourName.value
    destroyStartScreen();
    buildCountDown();
    
  };

  // ===================== BuildStartScreen ====================

  function buildStartScreen(){
    stage = 'startscreen';
  
    startScreen = document.createElement('div');
    startScreen.setAttribute('id', 'startscreen');

    // 1.1 Creates DOM elements Title
    var title = document.createElement('h1');
    title.innerText = 'JavaScript Quiz';
    startScreen.appendChild(title);

    var enterName = document.createElement('h3');
    enterName.innerText = 'Enter Your Name';
    startScreen.appendChild(enterName);

    // 1.2 Creates DOM elements Input Name
    var nameElm = document.createElement('input');
    nameElm.setAttribute("id", 'name');
    nameElm.setAttribute('type', 'text');
    nameElm.setAttribute('value', '');
    startScreen.appendChild(nameElm);

    // 1.3 Creates DOM element Start button
    startButton = document.createElement('button');
    startButton.innerText = 'START';
    startScreen.appendChild(startButton);

    // 1.4 Appends to #site-main
    mainElement.appendChild(startScreen);

    // 1.5 Binds EventListener on Start Button 
    startButton.addEventListener('click', startClick);
  }

  // ==================== DestroyStartScreen ===================

  function destroyStartScreen() {
    // 1.6 Removes EventListener on Start Button
    startButton.removeEventListener('click', startClick);

    // 1.7 Removes startScreen on Start Button
    startScreen.remove();
  }

  // ================== BuildCountDown =========================

  //-> 2. Starts Count Down
  function buildCountDown() {
    stage = 'countdown';

    // 2.1 Creates <div> #countdown
    countDownScreen = document.createElement('div');
    countDownScreen.setAttribute('id', 'countdown');

    // 2.2 Creates <h1> countDownTitle
    var countDownTitle = document.createElement('h1');
    countDownTitle.innerText = 'Lets play!';
    countDownScreen.appendChild(countDownTitle);

    // 2.3 Appends countDownScreen to #site-main
    mainElement.appendChild(countDownScreen);

    // 2.4 Puts setTimeout on Count Down
    window.setTimeout(function () {
      destroyCountDown();
      buildGame();
    }, 100);
  }

  // ================== DestroyCountDown ==================

  // 2.5 Destroys Count Down
  function destroyCountDown() {
    countDownScreen.remove();
  }

  // ================== BuildGame =========================

  //  Builds the Game
  function buildGame() {
    stage = 'gamescreen';
    game = new Game(mainElement, catalog);
    game.nextQuestion();
    // function createAnswer (){
    //   var currentQuestNumber = 0;
      
    //   //Get Text of the question
    //   var currentQuestText = catalog[0].question;

    //   // <div> for question
    //   var divContainerQuest = document.createElement('div');
    //   divContainerQuest.setAttribute('id','question-answer');

    //   //Appending Question to <div>
    //   // divContainerQuest.appendChild(currentQuestText);
    //   document.body.insertBefore(currentQuestText, divContainerQuest);

    //   //Number of Answers
    //   var numberOfAnswers = catalog[currentQuestNumber].answers.length;

    //   // Loop for Answers
    //   for(var x=0; x < numberOfAnswers; x++) {
    //   var currentAnswerText = catalog[currentQuestNumber].answers.text;

    //   // Buttons for Answers
    //   var answerBtn = document.createElement('button');

    //   // Text for Answers
    //   var newContent = document.createTextNode(currentAnswerText);

    //   // add the value inside the Array by using the createTextNode Function
    //   answerBtn.appendChild(newContent); 
    
    //   //Print out the newly created content
    //   var currentDiv = document.getElementById("question-answer");
    //   document.body.insertBefore(answerBtn, currentDiv);
    // }

    // }
  }

    // @todo 2.4 create the game instance
    
    // game.nextQuestion();

    // 2.5 Puts setTimeout on Count Down
  //   window.setTimeout(function () {
  //     destroyGame();
  //     buildGameOver();
  //   }, 5000);
  // }

  // ================== DestroyGame =========================


  function destroyGame() {
    // @todo destroy the game instance
    game.destroy();
  }

  // ================== BuildGameOver ====================

  var gameOverElm;
  var playAgainBtn;
  var playAgain = function () {
    destroyGameOver();
    buildCountDown();
  };

  function buildGameOver() {
    stage = 'gameOver';

    // @todo push the user name AND the game.score to the ranking

    // 
    gameOverElm = document.createElement('div');
    gameOverElm.setAttribute('id', 'game-over');

    var title = document.createElement('h1');
    title.innerText = 'Game Over';
    gameOverElm.appendChild(title);

    var yourScore = document.createElement('h2');
    yourScore.innerText = 'Your Score: ' + 33; // @todo use the real game game.score;
    gameOverElm.appendChild(yourScore);

    playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Play again';
    gameOverElm.appendChild(playAgainBtn);

    // 
    mainElement.appendChild(gameOverElm);

    // Play Again Button
    playAgainBtn.addEventListener('click', playAgain);
  }

  function destroyGameOver() {
    // Remove Play Again Btn
    playAgainBtn.removeEventListener('click', playAgain);
    // Remove gameOver from DOM
    gameOverElm.remove();
  }


  buildStartScreen();
  
}

window.onload = main;
