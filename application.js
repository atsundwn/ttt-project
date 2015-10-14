$(document).ready(function() {

  var board = [null, null, null,
               null, null, null,
               null, null, null];
  var player = 'O';

  $('.box').on('click', function () {

    board[$(this).attr('value')] = player;
    console.log(board);

    $(this).text(player);
    $(this).off('click');

    if((board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)) {
      alert(player + ' Wins!');
    }


    if(player === 'O') {
      player = 'X';
    } else {
        player = 'O';
      }
    $('#msgBox').text(player + '\'s Turn');



  });


});












var init = function() {

};

init();
