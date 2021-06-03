const gameBoard = (() => {
    const EMPTY = null;
    // const GAMEBOARDARRAY = ["X", "O", "X", "X", EMPTY, "X", "X", "O", "X"];
    const GAMEBOARDARRAY = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];

    const addSymboltoGameboardArray = (e) => {

        let index = e.target.getAttribute('data-index');

        if (gameBoard.GAMEBOARDARRAY[index] === EMPTY && gamePlay.getGameWon() === false){
            if (gamePlay.getP1turn() === true){
                gameBoard.GAMEBOARDARRAY[index] = PLAYER1.getSymbol();

            } else if (gamePlay.getP2turn() === true){
                gameBoard.GAMEBOARDARRAY[index] = PLAYER2.getSymbol();
            }
            gamePlay.play();
        };
        
    }

    const eventListeners = (() => {
        let squares = document.querySelectorAll('.gameboardsquare');
        squares.forEach(square => { square.addEventListener('click', addSymboltoGameboardArray)
            
        });
    })();

    const initalDisplay = (() => {
        for(i=0; i< GAMEBOARDARRAY.length; i++){
            let square = document.createElement('div');
            square.textContent = GAMEBOARDARRAY[i];
            square.setAttribute('data-index', i);
            square.classList.add('square');
            let grid = document.querySelector('.grid');
            grid.appendChild(square);
        }
    })();

    const displayGameboard = () => {
        let grid = document.querySelector('.grid');
        let squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            grid.removeChild(square);
        }
        );        
        for(i=0; i< GAMEBOARDARRAY.length; i++){
            let square = document.createElement('div');
            square.textContent = GAMEBOARDARRAY[i];
            square.setAttribute('data-index', i);
            square.classList.add('square');
            let grid = document.querySelector('.grid');
            grid.appendChild(square);
        }
    }

    return{
        displayGameboard,
        GAMEBOARDARRAY,
        addSymboltoGameboardArray
    };

})();


const playerFactory = (playernumber, name, playersymbol) => {
    const getPlayerNumber = () => playernumber;
    const getSymbol = () => playersymbol;
    const getName  = () => name;
    const info = () => console.log(`Player ${getPlayerNumber()} is named ${getName()} and he is playing as ${getSymbol()}`);
    return{getPlayerNumber, getName, getSymbol, info}
}

const PLAYER1 = playerFactory(1, "Collin", "X");
const PLAYER2 = playerFactory(2, "Adam", "O");

const gamePlay = (() => {
    let P1turn = true;
    let P2turn = false;
    let gameWon = false;
    let P1win = false;
    let P2win = false;
    const getGameWon = () => {
        if (gameWon === true){
            return true
        } else {
            return false
        }
    }
    const getP1turn = () => {
        if (P1turn === true){
            return true;
        }else {
            return false;
        }
    }
    const getP2turn = () => {
        if (P2turn === true){
            return true;
        }else {
            return false;
        }
    }
    const whoseTurn = () => {
        if (P1turn === true){
            console.log("It is Player 1's turn.")
        } else if (P2turn === true ){
            console.log("It is Player 2's turn.")
        }
    }
    const checkScore = () => {
        let gameboard = gameBoard.GAMEBOARDARRAY;
        switch (true){
        // player 1 win situations
        case (gameboard[0] === PLAYER1.getSymbol() && gameboard[1] === PLAYER1.getSymbol() && gameboard[2] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
        case (gameboard[3] === PLAYER1.getSymbol() && gameboard[4] === PLAYER1.getSymbol() && gameboard[5] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
        case (gameboard[6] === PLAYER1.getSymbol() && gameboard[7] === PLAYER1.getSymbol() && gameboard[8] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
        case (gameboard[0] === PLAYER1.getSymbol() && gameboard[3] === PLAYER1.getSymbol() && gameboard[6] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
        case (gameboard[1] === PLAYER1.getSymbol() && gameboard[4] === PLAYER1.getSymbol() && gameboard[7] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
        case (gameboard[2] === PLAYER1.getSymbol() && gameboard[5] === PLAYER1.getSymbol() && gameboard[8] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
        case (gameboard[0] === PLAYER1.getSymbol() && gameboard[4] === PLAYER1.getSymbol() && gameboard[8] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
        case (gameboard[2] === PLAYER1.getSymbol() && gameboard[4] === PLAYER1.getSymbol() && gameboard[6] === PLAYER1.getSymbol()):
            gameWon = true;
            P1win = true;
            break;
    // player 2 win situations
        case (gameboard[0] === PLAYER2.getSymbol() && gameboard[1] === PLAYER2.getSymbol() && gameboard[2] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
        case (gameboard[3] === PLAYER2.getSymbol() && gameboard[4] === PLAYER2.getSymbol() && gameboard[5] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
        case (gameboard[6] === PLAYER2.getSymbol() && gameboard[7] === PLAYER2.getSymbol() && gameboard[8] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
        case (gameboard[0] === PLAYER2.getSymbol() && gameboard[3] === PLAYER2.getSymbol() && gameboard[6] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
        case (gameboard[1] === PLAYER2.getSymbol() && gameboard[4] === PLAYER2.getSymbol() && gameboard[7] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
        case (gameboard[2] === PLAYER2.getSymbol() && gameboard[5] === PLAYER2.getSymbol() && gameboard[8] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
        case (gameboard[0] === PLAYER2.getSymbol() && gameboard[4] === PLAYER2.getSymbol() && gameboard[8] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
        case (gameboard[2] === PLAYER2.getSymbol() && gameboard[4] === PLAYER2.getSymbol() && gameboard[6] === PLAYER2.getSymbol()):
            gameWon = true;
            P2win = true;
            break;
    // tie situations
        case (gameboard[0] != null && gameboard[1] != null && gameboard[2] != null && gameboard[3] != null && gameboard[4] != null && gameboard[5] != null && gameboard[6] != null && gameboard[7] != null && gameboard[8] != null):
            gameWon = true;
            break;
        }

    }
    const play = () => {
        gameBoard.displayGameboard();
        checkScore();
        if (gameWon === true){
            switch (true){
                case (P1win === true):
                    console.log(`${PLAYER1.getName()} wins`)
                    break;
                case (P2win === true):
                    console.log(`${PLAYER2.getName()} wins`)
                    break;
                case (P1win === false && P2win === false):
                    console.log(`TIE!`);
                    break;
            }
        } else {
            if (P1turn === true) {
                P1turn = false;
                P2turn = true;
            } else if (P2turn === true){
                P1turn = true;
                P2turn = false;
            }
        }
    };
    return{
        play,
        whoseTurn,
        getP1turn,
        getP2turn,
        getGameWon
        
    };
})();
