'use strict';
$(document).ready(function() {

  var board, player;

  var newGame = function() {
    board = [null, null, null,
             null, null, null,
             null, null, null];
    player = 'O';

    $('#msgBox').text(player + '\'s Turn to Start');
    $('.box').text('');

    if (tttapi.token !== null) {
      tttapi.createGame(tttapi.token, function(error, data) {
        if (error) {
          console.error(error);
          $('#result').val('status: ' + error.status + ', error: ' +error.error);
          return;
        }
        $('#result').val(JSON.stringify(data, null, 4));
        tttapi.gameId = data.game.id;
        $('#apiBox').text('Current Game Id: ' + tttapi.gameId);
      });
    }
  }

  $('.box').hover(
      function() {
        $(this).css('background-color', 'lightslategrey');
      },
      function() {
        $(this).css('background-color', 'cornflowerblue');
    });

  var clickHandler = function() {
    if(board[$(this).attr('value')] === null) {
      board[$(this).attr('value')] = player;
      console.log(board); // For debugging
      $(this).text(player);
    } else {
      return;
    }

    var myData = {
      'game': {
        'cell': {
          'index': $(this).attr('value'),
            'value': player
        }
      }
    };

    if (tttapi.gameId !== null) {
      tttapi.markCell(tttapi.gameId, myData, tttapi.token, function(error) {
        if (error) {
          console.error(error);
          $('#result').val('status: ' + error.status + ', error: ' +error.error);
          return;
        }
      })
    }

    if((board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] ==
        player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)) {
        alert(player + ' Wins!');
      } else if (board.every(elem => elem !== null)) {
          alert('It\'s a Draw!');
        }

    if(player === 'O') {
      player = 'X';
    } else {
        player = 'O';
      }

    $('#msgBox').text(player + '\'s Turn');


  }

  $('.box').on('click', clickHandler);

  $('button').on('click', newGame);

  newGame();

  console.log(tttapi); //For debugging


});
