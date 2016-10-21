// Code goes here

// assign players and beginning score
var player,
  computer,
  moves = 0,
  currentPlayer,
  playerScore = 0,
  computerScore = 0,
  drawScore = 0,
  gameOver = false,
  isDraw = false,
  gameNum = 0;

// sets the player if button is clicked

  $('button').click(function() {
   
    if ($(this).attr('id') === ('xButton')) {
      player = "X";
    	computer = "O";
    	currentPlayer = player;
    } else if ($(this).attr('id') === ('oButton')) {
      player = "O";
    	computer = "X";
    	currentPlayer = player;
    } 
  });


// registers which cell was clicked
$('td').click(function() {
  var id = $(this).attr('id');
  placeMark(id);
  allChecks();
});

// steps for both player and computer to take and propel game forward
function allChecks() {
  moves++;
  checkWin();
  togglePlayer();
}

// enters player letter
function placeMark(id) {
if ($(this).text() === '') {
	$('#' + id).html(currentPlayer);
} else {
  alert('space taken!');
  }
}

// toggles X and O between turns
function togglePlayer() {
  if (currentPlayer === player) {
    currentPlayer = computer;
    computerMove();
  } else if(currentPlayer === computer) {
    currentPlayer = player;
  }
}

// Check for a win
function checkWin() {
  switch (true) {
    case $('#1').text() === currentPlayer && $('#2').text() === currentPlayer && $('#3').text() === currentPlayer:
      DrawLine('#1', '#2', '#3');
      gameOver = true;
      gameEnd();
      break;
    case $('#4').text() === currentPlayer && $('#5').text() === currentPlayer && $('#6').text() === currentPlayer:
      DrawLine('#4', '#5', '#6');
      gameOver = true;
      gameEnd();
      break;
    case $('#7').text() === currentPlayer && $('#8').text() === currentPlayer && $('#9').text() === currentPlayer:
      DrawLine('#7', '#8', '#9');
      gameOver = true;
      gameEnd();
      break;
    case $('#1').text() === currentPlayer && $('#4').text() === currentPlayer && $('#7').text() === currentPlayer:
      DrawLine('#1', '#4', '#7');
      gameOver = true;
      gameEnd();
      break;
    case $('#2').text() === currentPlayer && $('#5').text() === currentPlayer && $('#8').text() === currentPlayer:
      DrawLine('#2', '#5', '#8');
      gameOver = true;
      gameEnd();
      break;
    case $('#3').text() === currentPlayer && $('#6').text() === currentPlayer && $('#9').text() === currentPlayer:
      DrawLine('#3', '#6', '#9');
      gameOver = true;
      gameEnd();
      break;
    case $('#1').text() === currentPlayer && $('#5').text() === currentPlayer && $('#9').text() === currentPlayer:
      DrawLine('#1', '#5', '#9');
      gameOver = true;
      gameEnd();
      break;
    case $('#3').text() === currentPlayer && $('#5').text() === currentPlayer && $('#7').text() === currentPlayer:
      DrawLine('#3', '#5', '#7');
      gameOver = true;
      gameEnd();
      break;
    default:
      checkDraw();
  }
}

// draw line from player win
function DrawLine(tdPos1, tdPos2, tdPos3) {
  var $tdPos1 = $(tdPos1);
  var $tdPos2 = $(tdPos2);
  var $tdPos3 = $(tdPos3);
  $tdPos1.addClass('playWin');
  $tdPos2.addClass('playWin');
  $tdPos3.addClass('playWin');
}

// Check for draw
function checkDraw() {
  if (moves >= 9) {
    gameOver = true;
    isDraw = true;
    $('td').addClass('gameDraw');
    gameEnd();
  }
}

function gameEnd() {
  gameNum++;
  setTimeout(updateScore, 1000);
  setTimeout(reset, 2000);
}

// update score function
function updateScore() {
  if (gameOver === true && isDraw === true) {
    drawScore++;
    $('.draw').text(drawScore);
    } 
    else if (gameOver === true && isDraw === false && currentPlayer === computer) {
    playerScore++;
    $('.player').text(playerScore);
    } 
    else if (gameOver === true && isDraw === false && currentPlayer === player) {
    computerScore++;
    $('.computer').text(computerScore);
    }
}

// reset function
function reset() {
	$('td').text("");
	gameOver = false;
	isDraw = false;
	moves = 0;
	$('td').removeClass('playWin');
  $('td').removeClass('gameDraw');
  togglePlayer();
}

// TODO: computer AI
function computerMove() {
  if (gameOver === false && isDraw === false) {
    computerAI();
    allChecks();
  }
}

function computerAI() {
  switch (true) {
    case $('#1').text() !== player && $('#1').text() !== computer:
     placeMark('1');
      break;
    case $('#2').text() !== player && $('#2').text() !== computer:
     placeMark('2');
      break;
    case $('#3').text() !== player && $('#3').text() !== computer:
      placeMark('3');
      break;
    case $('#4').text() !== player && $('#4').text() !== computer:
      placeMark('4');
      break;
    case $('#5').text() !== player && $('#5').text() !== computer:
      placeMark('5');
      break;
     case $('#6').text() !== player && $('#6').text() !== computer:
      placeMark('6');
      break;
    case $('#7').text() !== player && $('#7').text() !== computer:
      placeMark('7');
      break;
    case $('#8').text() !== player && $('#8').text() !== computer:
      placeMark('8');
      break;
    case $('#9').text() !== player && $('#9').text() !== computer:
      placeMark('9');
      break;
  }
}