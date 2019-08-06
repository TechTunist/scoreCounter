var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.querySelector('#reset');
var p1Score = 0;
var p2Score = 0;
var p1ScoreBoard = document.querySelector('.p1-score');
var p2ScoreBoard = document.querySelector('.p2-score');
var winningScore = 7;
var gameOver = false;

p1Button.addEventListener('click', function() {
    if(!gameOver) {
        p1Score++;
        console.log(p1Score);
        p1ScoreBoard.textContent = p1Score;
        if (p1Score === winningScore) {
            gameOver = true;
            alert('Player 1 is the winner!!');
        };
    }
});

p2Button.addEventListener('click', function() {
    if(!gameOver) {
        p2Score++;
        console.log(p1Score);
        p2ScoreBoard.textContent = p2Score;
        if (p2Score === winningScore) {
            gameOver = true;
            alert('Player 2 is the winner!!');
        };
    }
});

resetButton.addEventListener('click', function() {
    gameOver = false;
    p1ScoreBoard.textContent = 0;
    p1Score = 0;
    p2ScoreBoard.textContent = 0;
    p2Score = 0;
});




