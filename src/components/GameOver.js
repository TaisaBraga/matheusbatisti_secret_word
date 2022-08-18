import React from 'react'

const GameOver = ({restart}) => {
  return (
    <div>
        <h1>GameOver</h1>
        <button onClick={restart}>Começar novamente!</button>
    </div>
  )
}

export default GameOver