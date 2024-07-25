import React, {createContext, useState, useContext} from "react"
import { TURNS } from "../constants"

const GameContext = createContext()

export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)
    const [error, setError] = useState(null)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
        setError(null)
    }

    return (
        <GameContext.Provider value={{ board, setBoard, turn, setTurn, winner, setWinner, error, setError, resetGame }}>
            {children}
        </GameContext.Provider>
    )
}
