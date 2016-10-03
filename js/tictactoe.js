// Code goes here

// assign the players
var player,
  computer,
  moves = 0,
  currentPlayer,
  currentPlayerMark = 'X',
  playerScore = 0,
  computerScore = 0,
  drawScore = 0,
  gameOver = false,
  isDraw = false,
  tableClickable = true;

// sets the player if button is clicked
// 'X' always goes first
$('button').click(function() {
  if ($(this).attr('id') === ('xButton')) {
    player = "X";
    computer = 'O';
    currentPlayer = player;
    // fadeMsg();
  } else if ($(this).attr('id') === ('oButton')) {
    player = "O";
    computer = 'X';
    currentPlayer = computer;
    // fadeMsg();
    // compFirst();
  }
});

//TODO: fadeMsg(); 
// fade in message
// 'Start Us Off!' (for player = X)
// 'Computer Starts!' (for computer = X)
// fade out message

// TODO: compFirst()
//allows the computer to make the first move


// enters player letter, toggles to next player
$('td').click(function() {
  if ($(this).text() === '') {
    $(this).text(currentPlayerMark);
    moves++;
    checkWin();
    togglePlayer();
  } else {
    alert('space taken!');
  }
});

// toggles X and O between turns
function togglePlayer() {
  if (currentPlayerMark === "X") {
    currentPlayerMark = "O";
  } else {
    currentPlayerMark = "X";
  }
}

// Check for a win
function checkWin() {
  switch (true) {
    case $('#c1r1').text() === currentPlayerMark && $('#c2r1').text() === currentPlayerMark && $('#c3r1').text() === currentPlayerMark:
      DrawLine('#c1r1', '#c2r1', '#c3r1');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    case $('#c1r2').text() === currentPlayerMark && $('#c2r2').text() === currentPlayerMark && $('#c3r2').text() === currentPlayerMark:
      DrawLine('#c1r2', '#c2r2', '#c3r2');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    case $('#c1r3').text() === currentPlayerMark && $('#c2r3').text() === currentPlayerMark && $('#c3r3').text() === currentPlayerMark:
      DrawLine('#c1r3', '#c2r3', '#c3r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    case $('#c1r1').text() === currentPlayerMark && $('#c1r2').text() === currentPlayerMark && $('#c1r3').text() === currentPlayerMark:
      DrawLine('#c1r1', '#c1r2', '#c1r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    case $('#c2r1').text() === currentPlayerMark && $('#c2r2').text() === currentPlayerMark && $('#c2r3').text() === currentPlayerMark:
      DrawLine('#c2r1', '#c2r2', '#c2r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    case $('#c3r1').text() === currentPlayerMark && $('#c3r2').text() === currentPlayerMark && $('#c3r3').text() === currentPlayerMark:
      DrawLine('#c3r1', '#c3r2', '#c3r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    case $('#c1r1').text() === currentPlayerMark && $('#c2r2').text() === currentPlayerMark && $('#c3r3').text() === currentPlayerMark:
      DrawLine('#c1r1', '#c2r2', '#c3r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    case $('#c3r1').text() === currentPlayerMark && $('#c2r2').text() === currentPlayerMark && $('#c1r3').text() === currentPlayerMark:
      DrawLine('#c3r1', '#c2r2', '#c1r3');
      gameOver = true;
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
      break;
    default:
      checkDraw();
      
      setTimeout(updateScore, 1000);
      // setTimeout(reset, 1000);
  }
}

// draw line from player win
function DrawLine(pos1, pos2, pos3) {
  var $pos1 = $(pos1);
  var $pos2 = $(pos2);
  var $pos3 = $(pos3);
  $pos1.addClass('playWin');
  $pos2.addClass('playWin');
  $pos3.addClass('playWin');

  togglePlayer(currentPlayer);
}

// TODO: Check for draw
function checkDraw() {
  if (moves === 9) {
    gameOver === true;
    isDraw = true;
    isClickable(gameOver);
    //setTimeout(reset, 1000);

    //TODO: popup stating draw
  }
}

// TODO: update score function
function updateScore() {
  if (gameOver === true && isDraw === true) {
    console.log(drawScore);
    drawScore++;
    console.log(drawScore);
    // } else if (gameOver === true && isDraw === false) {
    //   if (currentPlayerMark === "X") {
    //     if (currentPlayer === player) {
    //       player++;
    //     } else {
    //       computer++;
    //     }
    //   } else if (currentPlayerMark === "O") {
    //     if (currentPlayer === player) {
    //       player++;
    //     } else {
    //       computer++;
    //     }
    //   }
  }
}



// TODO: make table unclickable
function isClickable(gameOver) {
  if (gameOver === true) {
    $('#field').prop('disabled', true);
  }
}

// TODO: reset function
// clear board

// reset game


// other variable
// var currentPlayer = 'X',

//   playerScore = 0,
//   computerScore = 0,
//   cellNum,
//   cellPosition = [];

// // sets the player if button is clicked
// var assignment = {
//   xButton: function() {
//     player = 'X';
//     computer = 'O';
//   },
//   oButton: function() {
//     player = 'O';
//     computer = 'X';
//   }
// };


// function chooseSquare {

// }

// function chooseSpace() {
//   for (i = 0; i < spaces.length; i++) {
//   if () 
//   }

// }



// // Declare winner

// // Increase score after win
// function updateScore() {
//   if (playerWin === true) {
//     playerScore++;
//   } else {
//     computerScore++;
//   }
//   Clear();
// }

// // Clear board after win
// function clear() {
// clear board

// allow board to be clickable again

//clear winner line

//reset moves

//reset gameover

// reset player to chosen one
//}

//Mark position clicked