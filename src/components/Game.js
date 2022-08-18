import React from 'react'

const Game = ({verifyWord}) => {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={verifyWord}>Verificar Palavra!</button>
    </div>
  )
}

export default Game