import './index.css'
import { GameProvider } from './context/GameProvider'
import { GameBoard } from './components/GameBoard'

const App = () => { 

  return (
    <GameProvider>
      <GameBoard />
    </GameProvider>
  )
}

export default App