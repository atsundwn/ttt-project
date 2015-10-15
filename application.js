$(document).ready(function() {

  var board, player;

  var newGame = function() {
    board = [null, null, null,
             null, null, null,
             null, null, null];
    player = 'O';

    $('#msgBox').text('O\'s Turn to Start');
    $('.box').text('');
    $('.box').bind('click', clickHandler);
    $('.box').hover(
      function() {
        $(this).css('background-color', 'lightslategrey');
      },
      function() {
        $(this).css('background-color', 'cornflowerblue');
    });
  }

  var clickHandler = function() {
    board[$(this).attr('value')] = player;
    console.log(board);

    $(this).text(player);
    $(this).unbind('click', clickHandler);

    if((board[0] === player && board[1] === player && board[2] === player) ||
       (board[3] === player && board[4] === player && board[5] === player) ||
       (board[6] === player && board[7] === player && board[8] === player) ||
       (board[0] === player && board[3] === player && board[6] === player) ||
       (board[1] === player && board[4] === player && board[7] === player) ||
       (board[2] === player && board[5] === player && board[8] === player) ||
       (board[0] === player && board[4] === player && board[8] === player) ||
       (board[2] === player && board[4] === player && board[6] === player)) {
      alert(player + ' Wins!');
      $('.box').unbind('click', clickHandler);
      $('#msgBox').text('Press New Game to Play Again');
      return;
    } else if (board.every(elem => elem !== null)) {
      alert('It\'s a Draw!');
      $('.box').unbind('click', clickHandler);
      $('#msgBox').text('Press New Game to Play Again');
      return;
    }

    if(player === 'O') {
      player = 'X';
    } else {
        player = 'O';
      }

    $('#msgBox').text(player + '\'s Turn');

  }

  $('button').on('click', newGame);

});

