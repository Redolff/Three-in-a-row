import { COMBOS_WINNERS } from "../constants"

export const checkWinner = (boardToCheck) => {
    for (const combo of COMBOS_WINNERS) {
        const [a, b, c] = combo
        if( boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]){
            return boardToCheck[a]
        }
    }
    // Si no hay ganador
    return null
}

export const checkGameIsOver = (newBoard) => {
    // revisamos si hay un empate
    // si no hay mas espacios vacios en el tablero
    // newBoard = ['x', 'o', 'x', 'o', 'o', 'x', 'o', 'o', 'o']

    return newBoard.every((x) => x !== null)
}

