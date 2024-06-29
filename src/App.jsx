import './index.css'
import './App.css'
import { Game } from './components/Game'
import { Turn } from './components/Turn'
import { Winner } from './components/Winner'
import { GameProvider, useGame } from './context/GameProvider'

const App = () => { 
  return (
    <GameProvider>
      <div className='board'>
        <h1> Tres en linea </h1>
        <button onClick={() => useGame().resetGame()}>Empezar de nuevo</button>
        <Game />
        <Turn />
        <Winner />
      </div>
    </GameProvider>
  )
}

export default App