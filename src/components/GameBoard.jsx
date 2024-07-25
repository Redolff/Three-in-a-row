import { useGame } from '../context/GameProvider'
import { Game } from './Game'
import { Turn } from './Turn'
import { Winner } from './Winner'

export const GameBoard = () => {
    const { resetGame } = useGame()

    return (
        <div className='board'>
            <h1> Tres en linea </h1>
            <button onClick={resetGame}>Empezar de nuevo</button>
            <Game />
            <Turn />
            <Winner />
      </div>
    )
}