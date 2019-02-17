console.log(`It's connected!`);
/************************************************/
/*************** Tic Tac Toe Game ***************/
/************************************************/

// Selecting the cells
// let c1 = document.getElementById("c1");
// let c2 = document.getElementById("c2");
// let c3 = document.getElementById("c3");
// let c4 = document.getElementById("c4");
// let c5 = document.getElementById("c5");
// let c6 = document.getElementById("c6");
// let c7 = document.getElementById("c7");
// let c8 = document.getElementById("c8");
// let c9 = document.getElementById("c9");
let btnReset = document.getElementById("reset");

// Selecting the game table
let gameTable = document.getElementById("ticTacToe").children[0]; // not forgot <tbody> is there even if you didn't wroteit
// Selecting the rows
let row1 = [
    gameTable.children[0].children[0],
    gameTable.children[0].children[1],
    gameTable.children[0].children[2]
]

let row2 = [
    gameTable.children[1].children[0],
    gameTable.children[1].children[1],
    gameTable.children[1].children[2]
]

let row3 = [
    gameTable.children[2].children[0],
    gameTable.children[2].children[1],
    gameTable.children[2].children[2]
]

// The Game Object
let game = {
    turn: "X",
    next: function() {
        if(this.turn === "X") {
            this.turn = "O";
        } else if(this.turn === "O") {
            this.turn = "X";
        }
        // return this.turn;
    },
    isCellEmpty: function(cell) {
        if (cell.innerText === "") {
            return true;
        } else {
            return false;
        }
    },
    reset: function() {
        for (let i = 0; i < 3; i++) {
            gameTable.children[i].children[0].innerText = "";
            gameTable.children[i].children[1].innerText = "";
            gameTable.children[i].children[2].innerText = "";
        }
        this.turn = "X";
        // let cells = table.getelementsByTagName("td");
        // for (let cell of cells) {
        //     cell.innerText = "";
        // }
    }
}

// Event Listeners
for (let i = 0; i < row1.length; i++) {
    row1[i].addEventListener("click", function() {
        if (game.isCellEmpty(row1[i]) === true) {
            row1[i].innerText = game.turn;
            game.next();
        } 
    });
}

for (let i = 0; i < row2.length; i++) {
    row2[i].addEventListener("click", function() {
        if (game.isCellEmpty(row2[i]) === true) {
            row2[i].innerText = game.turn;
            game.next();
        } 
    });
}

for (let i = 0; i < row3.length; i++) {
    row3[i].addEventListener("click", function() {
        if (game.isCellEmpty(row3[i]) === true) {
            row3[i].innerText = game.turn;
            game.next();
        } 
    });
}

btnReset.addEventListener("click", function() {
    game.reset();
})

// Checking the winner
let cells = document.getElementsByTagName("td");
for (let cell of cells) {
    cell.addEventListener("click", function() {
        switch (game.turn) {
            case row1[0].innerText && row1[1].innerText && row1[2].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            case row2[0].innerText && row2[1].innerText && row2[2].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            case row3[0].innerText && row3[1].innerText && row3[2].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            case row1[0].innerText && row2[0].innerText && row3[0].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            case row1[1].innerText && row2[1].innerText && row3[1].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            case row1[2].innerText && row2[2].innerText && row3[2].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            case row1[0].innerText && row2[1].innerText && row3[2].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            case row1[2].innerText && row2[1].innerText && row3[0].innerText:
                console.log(`${game.turn} is WINNER`);
                break;
            default:
                break;
        };
    })
}


