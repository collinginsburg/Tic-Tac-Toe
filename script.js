const gameBoard = (() => {
    const EMPTY = null;
    const GAMEBOARDARRAY =
    [
        [EMPTY, EMPTY, EMPTY], 
        [EMPTY, EMPTY, EMPTY], 
        [EMPTY, EMPTY, EMPTY]
    ];
    return{
        GAMEBOARDARRAY
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

// const gamePlay = (() => {
//     const P1turn = true;
//     const P2turn = false;
//     const play = () => 
//         if (P1turn)
//     return{
//         play
        
//     };
// })();