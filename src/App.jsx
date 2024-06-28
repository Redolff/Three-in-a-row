import { Square } from './components/Square'
import confetti from 'canvas-confetti' 
import './index.css'
import './App.css'
import { useState } from 'react'

const TURNS = {
  X : 'x',
  O : 'o'
}

const COMBOS_WINNERS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const App = () => { 
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    for(const combo of COMBOS_WINNERS){
      const [a, b, c] = combo;
      if((boardToCheck[a]) && 
        (boardToCheck[a] === boardToCheck[b]) && 
        (boardToCheck[a] === boardToCheck[c])
      ){
        return boardToCheck[a]
      }
    }
    // Si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const CheckIsGameOver = (newBoard) => {
    // revisamos si hay un empate
    // si no hay mas espacios vacios en el tablero
    // newBoard = ['x', 'o', 'x', 'o', 'o', 'x', 'o', 'o', 'o']

    return newBoard.every((x) => x !== null)
  }

  const updateBoard = (index) => {
    // no pisar la celda si ya tiene un valor o tiene un ganador
    if(board[index] || winner) {
      return 
    }
    // Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Actualizar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Determinar un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if(CheckIsGameOver(newBoard)){
      setWinner(false)
    }
  }

  return (
    <div className='board'>
      <h1> Tres en linea </h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {board.map((x, index) => {
          return (
            <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}
            >
              {x}      
            </Square>        
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {winner === false
                  ? 'Empate '
                  : 'Ganó: '
                }
              </h2>
              
              <header className='win'>
                {winner && <Square> {winner} </Square>}
              </header>

              <footer>
                <button onClick={resetGame}> Empezar de nuevo </button>
              </footer>
            </div>
          </section>
        )
      }
      
    </div>
  )
}

export default App