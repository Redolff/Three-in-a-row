import { Square } from "./Square"
import { useGame } from "../context/GameProvider"
import { TURNS } from "../constants"

export const Turn = () => {
    const { turn } = useGame()

    return (
        <section className='turn'>
            <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
            <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
        </section>
    )
}