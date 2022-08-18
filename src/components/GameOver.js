import React from 'react'
import "./GameOver.css"

const GameOver = ({restart, score}) => {
  return (
    <div>
        <h1>Fim do Jogo</h1>
        <h3>A sua pontuação foi: <span>{score}</span></h3>
        <button onClick={restart}>Começar novamente!</button>
    </div>
  )
}

export default GameOver