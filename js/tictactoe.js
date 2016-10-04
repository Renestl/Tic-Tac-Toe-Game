// Code goes here

// assign players and beginning score
var player = "X",
  computer = "O",
  moves = 0,
  currentPlayer,
  // currentPlayer,
  playerScore = 0,
  computerScore = 0,
  drawScore = 0,
  gameOver = false,
  isDraw = false;

// sets the player if button is clicked
$('button').click(function() {
  if ($(this).attr('id') === ('xButton')) {
    player = "X";
  	computer = "O";
  	currentPlayer = player;
  } else if ($(this).attr('id') === ('oButton')) {
    player = "O";
  	computer = "X";
  	currentPlayer = computer;
    // compFirst();
  }
});

// enters player letter, toggles to next player
$('td').click(function() {
  if ($(this).text() === '') {
    $(this).text(currentPlayer);
    moves++;
    checkWin();
    togglePlayer();
  } else {
    alert('space taken!');
  }
});

// toggles X and O between turns
function togglePlayer() {
  if (currentPlayer === player) {
    currentPlayer = computer;
  } else {
    currentPlayer = player;
  }
}

// Check for a win
function checkWin() {
  switch (true) {
    case $('#c1r1').text() === currentPlayer && $('#c2r1').text() === currentPlayer && $('#c3r1').text() === currentPlayer:
      DrawLine('#c1r1', '#c2r1', '#c3r1');
      gameOver = true;
      gameEnd();
      break;
    case $('#c1r2').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c3r2').text() === currentPlayer:
      DrawLine('#c1r2', '#c2r2', '#c3r2');
      gameOver = true;
      gameEnd();
      break;
    case $('#c1r3').text() === currentPlayer && $('#c2r3').text() === currentPlayer && $('#c3r3').text() === currentPlayer:
      DrawLine('#c1r3', '#c2r3', '#c3r3');
      gameOver = true;
      gameEnd();
      break;
    case $('#c1r1').text() === currentPlayer && $('#c1r2').text() === currentPlayer && $('#c1r3').text() === currentPlayer:
      DrawLine('#c1r1', '#c1r2', '#c1r3');
      gameOver = true;
      gameEnd();
      break;
    case $('#c2r1').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c2r3').text() === currentPlayer:
      DrawLine('#c2r1', '#c2r2', '#c2r3');
      gameOver = true;
      gameEnd();
      break;
    case $('#c3r1').text() === currentPlayer && $('#c3r2').text() === currentPlayer && $('#c3r3').text() === currentPlayer:
      DrawLine('#c3r1', '#c3r2', '#c3r3');
      gameOver = true;
      gameEnd();
      break;
    case $('#c1r1').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c3r3').text() === currentPlayer:
      DrawLine('#c1r1', '#c2r2', '#c3r3');
      gameOver = true;
      gameEnd();
      break;
    case $('#c3r1').text() === currentPlayer && $('#c2r2').text() === currentPlayer && $('#c1r3').text() === currentPlayer:
      DrawLine('#c3r1', '#c2r2', '#c1r3');
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

  togglePlayer(currentPlayer);
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
  setTimeout(updateScore, 1000);
  setTimeout(reset, 2000);
}

// update score function
function updateScore() {
  if (gameOver === true && isDraw === true) {
    drawScore++;
    $('.draw').text(drawScore);
    } 
    else if (gameOver === true && isDraw === false && currentPlayer === player) {
    playerScore++;
    $('.player').text(playerScore);
    } 
    else if (gameOver === true && isDraw === false && currentPlayer === computer) {
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
}

// TODO: computer AI