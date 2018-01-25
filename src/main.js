'use strict';


function main() {

  var yourName;
  var score = 0;
  self.onEnded;
  
  var mainElement = document.querySelector('#site-main');

  // @todo create/destroy the game instance
  var game;
  var stage;

  // @todo capture user name
  // var name;

  // @todo ranking
  //var ranking = [];


  var startScreen;
  var startButton;
  var countDownScreen;
  var gameScreen;
  

  

  var startClick = function () {
    var yourName = document.getElementById("name").value;
    destroyStartScreen();
    buildCountDown(yourName);
    
  };

  // =================== BuildStartScreen ==============

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

  // ==================== DestroyStartScreen ==============

  function destroyStartScreen() {
    // 1.6 Removes EventListener on Start Button
    startButton.removeEventListener('click', startClick);

    // 1.7 Removes startScreen on Start Button
    startScreen.remove();
  }

  // ================== BuildCountDown ====================

  //-> 2. Starts Count Down
  function buildCountDown(yourName) {
    var yourName;
    stage = 'countdown';
    var countDown = 3;

    // 2.1 Creates <div> #countdown
    countDownScreen = document.createElement('div');
    countDownScreen.setAttribute('id', 'countdown');
    mainElement.appendChild(countDownScreen);

    // 2.2 Appends countDownScreen to #site-main
    var countDownTitle = document.createElement('h1');
    countDownScreen.appendChild(countDownTitle);

    // 2.3 Creates setInterval with Count Down
    var intervalId = setInterval(function () {
      countDownTitle.innerText = countDown;
      countDown--;
    }, 1000)

    // 2.4 Puts setTimeout on Count Down
    window.setTimeout(function () {
      destroyCountDown();
      clearInterval(intervalId);
      buildGame(yourName);
    }, 3500);
  }

  // ================== DestroyCountDown ==================

  // 2.5 Destroys Count Down
  function destroyCountDown() {
    countDownScreen.remove();
  }

  // ================== BuildGame =========================

  //  Builds the Game
  function buildGame(yourName) {
   var yourName;
    stage = 'gamescreen';
    game = new Game(mainElement, catalog, yourName);
    game.buildQuestion();
    
    game.onGameOver(function () {
      destroyGame();
      buildGameOver(yourName);
    })

  }


  // ================== DestroyfGame =====================


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
    var yourName;

    // @todo push the user name AND the game.score to the ranking

    // 
    gameOverElm = document.createElement('div');
    gameOverElm.setAttribute('id', 'game-over');

    var title = document.createElement('h1');
    title.innerText = 'Game Over';
    gameOverElm.appendChild(title);

    var yourScore = document.createElement('h2');
    yourScore.innerText = 'Your Score: ' + game.score;
    gameOverElm.appendChild(yourScore);

    var yourName = document.createElement('p');
    yourName.innerText = 'Name: ' + yourName;
    gameOverElm.appendChild(yourName);

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
