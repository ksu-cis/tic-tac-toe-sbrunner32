﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

/*var form = docmunet.getElementsById("board");
var cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event => {

    }
        
        )
}*/
var dragging;

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('dragend', onDragEnd);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragleave', onDragLeave);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {

    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
    
}

function onDragEnd(event) {
    
    console.log(dragging);
    // do something...
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
}




/*var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + winner + " Wins!";
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    //Check for horizontal cells
    for (var i = 0; i < 9; i+=3)
    {
        if (cells[i].innerText&& cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[i].innerText);
            return true;
        }
    }

    //Check for vertical cells
    for (var j = 0; j < 3; j++ ) {
        if (cells[j].innerText && cells[j].innerText === cells[3 + j].innerText && cells[6 + j].innerText === cells[3 + j].innerText) {
            setWinner(cells[j].innerText);
            return true;
        }
    }
    return false;
    
    
    
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }            
        else {
            turn = "x";
        }
        checkForWin();
        if (!checkForWin()) {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();
*/

