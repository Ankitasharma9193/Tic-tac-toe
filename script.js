console.log('Welcome To tic-tac-toe');
let music = new Audio('music.mp3');
let turnAudio = new Audio('ting.mp3');
let gameoverAudio = new Audio('gameover.mp3');

let turn = 'X';

let isGameOver = false

const changeTurn = (turn) => {
    return turn === 'X' ? '0' : 'X';
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0,1,2, 5, 5, 0],
    [3,4,5, 5, 15, 0],
    [6,7,8, 5, 25, 0],
    [0,3,6, -5, 15, 90],
    [1,4,7, 5, 15, 90],
    [2,5,8, 15, 15, 90],
    [0,4,8, 5, 15, 45],
    [2,4,6, 5, 15, 135]
  ]

  wins.forEach((win) => {
    if(boxtext[win[0]].innerText !== '' 
        && boxtext[win[0]].innerText === boxtext[win[1]].innerText
        && boxtext[win[1]].innerText === boxtext[win[2]].innerText){
            isGameOver = true;
            document.querySelector('.turnInfo').innerText = `Player ${boxtext[win[0]].innerText} won!`;

            // line will be visible after the win, we do not want to show it initially thus we set width to 0
            document.querySelector('.line').style.width = '25vw'
            document.querySelector('.line').style.transform = `translate(${win[3]}vw, ${win[4]}vw) rotate(${win[5]}deg)`

            console.log(document.querySelector('.imageClass'));
            document.querySelector('.imageClass').getElementsByTagName('img')[0].style.width = '200px';
        }
  })
};

let boxes = document.getElementsByClassName('box');

//game logic
Array.from(boxes).forEach((eachbox) => {
    let boxtext = eachbox.querySelector('.boxtext');
    eachbox.addEventListener('click', (e) => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn(boxtext.innerText);
            // turnAudio.play();
            checkWin();
            console.log(document.getElementsByClassName('gameinfo'))
            if(isGameOver === false){ // if the game running only then this should be visible
             document.getElementsByClassName('turnInfo')[0].innerText = 'Your Turn: ' + turn;
            }
        }
    })
});

// for reset button
let resetButton = document.getElementsByClassName("resetButton")[0];
console.log(resetButton);

resetButton.addEventListener('click', () => {
    let boxtext = document.getElementsByClassName( "boxtext" );
    Array.from(boxtext).forEach((item) => {
        if(item.innerText !== "") item.innerText = "";
    } )
    isGameOver = false; // since we reset
    turn = 'X';
    document.querySelector('.line').style.width = '0vw'; // line needs to be disappear 
    document.getElementsByClassName('turnInfo')[0].innerText = 'Your Turn: ' + turn; // the text should be  X's turn again for as was initially
    document.querySelector('.imageClass').getElementsByTagName('img')[0].style.width = '0px'; // the width of the gif should be 0 again as was initially
})

