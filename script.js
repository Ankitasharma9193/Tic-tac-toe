console.log('Welcome To tic-tac-toe');
let music = new Audio('music.mp3');
let turnAudio = new Audio('ting.mp3');
let gameoverAudio = new Audio('gameover.mp3');

let turn = 'X';

let winningCandidate = false

const changeTurn = (turn) => {
    return turn === 'X' ? '0' : 'X';
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  wins.forEach((win) => {
    if(boxtext[win[0]].innerText !== '' 
        && boxtext[win[0]].innerText === boxtext[win[1]].innerText
        && boxtext[win[1]].innerText === boxtext[win[2]].innerText){
            winningCandidate = true;
            document.querySelector('.turnInfo').innerText = `Player ${boxtext[win[0]].innerText} won!`
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
            if(winningCandidate == false){
             document.getElementsByClassName('turnInfo')[0].innerText = 'Your Turn: ' + turn;
            }
        }
    })
})
