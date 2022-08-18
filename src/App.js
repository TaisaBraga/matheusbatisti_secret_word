import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen'
import { wordsList } from './data/words';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  console.log(words)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const verifyWord = () => {
    setGameStage(stages[2].name)
  }

  const restart = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyWord={verifyWord}/>}
      {gameStage === "end" && <GameOver restart={restart}/>}
    </div>
  );
}

export default App;
