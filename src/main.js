'use strict';

function main() {

  var yourName;
  var score = 0;
  
  var mainElement = document.querySelector('#site-main');

  var stage;
  var game;
  var countdown;

  // 1. Start Screen

  var startScreen;
  var startButton;
  var countDownScreen;
  var gameScreen;
  
  var startClick = function () {
    destroyStartScreen();
    buildCountDown();
  }
//======================= BuildStartScreen ====================


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
    var yourName = document.createElement('input');
    startScreen.appendChild(yourName);

    // 1.3 Creates DOM element Start button
    startButton = document.createElement('button');
    startButton.innerText = 'START';
    startScreen.appendChild(startButton);

     // 1.4 Appends to #site-main
     mainElement.appendChild(startScreen);

     // 1.5 Binds EventListener on Start Button 
     startButton.addEventListener('click', startClick);
  }

  //==================== DestroyStartScreen =====================

  function destroyStartScreen() {
     // 1.6 Removes EventListener on Start Button
    startButton.removeEventListener('click', startClick);

    // 1.7 Removes startScreen on Start Button
    startScreen.remove();
  }

    //================== BuildCountDown =========================

    //-> 2. Starts Count Down
  function buildCountDown() {
    countdown = 'countdown';

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
    }, 5000);
  }

    //================== DestroyCountDown =========================

   // 2.5 Destroys Count Down
  function destroyCountDown() {
   countDownScreen.remove();
 }

   //================== BuildGame =========================

  // 3. Builds the Game
  function buildGame() {
    game = 'gamescreen';

    // 2.1 Creates <div> #gamescreen
    gameScreen = document.createElement('div');
    gameScreen.setAttribute('id', 'gamescreen');

    // 2.2 Creates <h1> countDownTitle
    var gameScreenTitle = document.createElement('h1');
    gameScreenTitle.innerText = 'Game';
    gameScreen.appendChild(gameScreenTitle);

    // 2.3 Appends countDownScreen to #site-main
    mainElement.appendChild(gameScreen);

    // 2.4 Puts setTimeout on Count Down
    window.setTimeout(function () {
      destroyGame();
      buildGameOver();
    }, 5000);
  }

//================== DestroyGame =========================


function destroyGame() {
  gameScreen.remove();
}

  //================== BuildGameOver ====================

  var gameOverElm;
  var playAgainBtn;
  var playAgain = function () {
    destroyGameOver();
    buildCountDown();
  };

  function buildGameOver() {
    stage = 'gameOver';

    // 
    gameOverElm = document.createElement('div');
    gameOverElm.setAttribute('id', 'game-over');

    var title = document.createElement('h1');
    title.innerText = 'Game Over';
    gameOverElm.appendChild(title);

    var yourScore = document.createElement('h2');
    yourScore.innerText = 'Your Score: ' + game.score;
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
