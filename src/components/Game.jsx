import '../index.css'
import confetti from 'canvas-confetti'
import { Square } from './Square'
import { TURNS } from '../constants'
import { checkWinner, checkGameIsOver } from '../logic/board'
import { useGame } from '../context/GameProvider'

export const Game = () => {
    const { board, setBoard, turn, setTurn, winner, setWinner} = useGame()

    const updateBoard = (index) => {

        // No actualizar una celda si ya tiene un valor o hay un ganador
        if(board[index] || winner){
            return 
        }

        // Actualizar tablero
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        
        // Actualizar turno
        const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
        setTurn(newTurn)
        
        // Actualizar ganador
        const newWinner = checkWinner(newBoard)
        if(newWinner){
            confetti()
            setWinner(newWinner)
        }else if(checkGameIsOver(newBoard)){
            setWinner(false)
        }
    }

    return (
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
    )
}