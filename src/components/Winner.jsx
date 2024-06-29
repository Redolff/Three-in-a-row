import { useGame } from "../context/GameProvider"
import { Footer } from "./Footer"
import { Square } from "./Square"

export const Winner = () => {
    const { winner, resetGame } = useGame()

    if(winner === null) return null

    const winnerText = (winner === false ? 'Empate' : 'Ganó: ')
    
    return (
        <section className='winner'>
            <div className='text'>
                <h2> {winnerText} </h2>
                
                <header className='win'>
                    {winner && <Square> {winner} </Square>}
                </header>

                <Footer resetGame={resetGame}/>
            </div>
        </section>
    )
}