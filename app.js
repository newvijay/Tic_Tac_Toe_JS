
let turn="X"
let winner=null;

function setMessage(msg){
document.getElementById("message").innerHTML=msg;
}

function resetAll(){
    for(let i= 1;i<=9;i++)
    {
        document.getElementById('c'+i).innerText="";
    }
    setMessage("Welcome to Game");
}

function  checkIfBoardIsFull() {
    let full=true
    for(let i=1;i<=9;i++)
    {
        if(document.getElementById('c'+i).innerText == "")
        {
            full=false
        }
    }
    return full;

}

function startGame(){
    resetAll();
setMessage(turn+"'s turn now!!");
}


function getBox(number)
{
return document.getElementById("c"+number).innerText;
}

function checkRow(a,b,c,move){
let result=false;
if(getBox(a) == move && getBox(b) == move && getBox(c) == move)
result=true;
return result;
}


function checkForWinner(move){
let result=false;
if(checkRow(1,2,3,move) ||
   checkRow(4,5,6,move) ||
   checkRow(7,8,9,move) ||
   checkRow(1,4,7,move) ||
   checkRow(2,5,8,move) ||
   checkRow(3,6,9,move) ||
   checkRow(1,5,9,move) ||
   checkRow(3,5,7,move))
result=true
return result;
}



function switchTurn(){
        if (checkForWinner(turn)) {
            setMessage(turn + " won. Congrats!!");
            winner = turn;
        } else if (turn == "X" && !checkIfBoardIsFull()) {
            turn = "O"
            setMessage(turn + "'s turn now!!");
        } else if (!checkIfBoardIsFull())  {
            turn = "X"
            setMessage(turn + "'s turn now!!");
        }
        else
            setMessage('Game Tied');
}

function nextPlayer(square){
if (winner == null){
if(square.innerText ===""){
square.innerText=turn;
switchTurn();
}
}
}

