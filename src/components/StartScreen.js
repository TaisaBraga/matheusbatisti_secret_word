import './StartScreen.css'

export default function StartScreen({startGame}){
    return(
        <div className='start'>
            <h1>Screct Word</h1>
            <p>Clique no botao abaixo para começar!</p>
            <button onClick={startGame}>Começar o Jogo!</button>
        </div>
    )
}