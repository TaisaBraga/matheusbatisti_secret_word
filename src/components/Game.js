import React, { useState } from "react";
import { useRef } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("")
    letterInputRef.current.focus()
  };
  return (
    <div className="game">
      <p className="score">
        <span>Pontuação:{score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <p className="tip">
        Dica: <span>{pickedCategory}</span>
      </p>
      <p>
        Você ainda tem <span style={{ fontWeight: "bold" }}>{guesses}</span>{" "}
        tentativas
      </p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra dda palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button type="onSubmit">Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras utilizadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
      <button onClick={verifyLetter}>Verificar Palavra!</button>
    </div>
  );
};

export default Game;
