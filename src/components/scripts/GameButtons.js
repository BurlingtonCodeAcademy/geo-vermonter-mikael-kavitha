import { useState } from 'react'

function GameButtons({startClickHandler, guessClickHandler, quitClickHandler, buttonState}) { 

   


return (
    <div>
        <button onClick={startClickHandler} disabled={buttonState}>Start a Game</button>
        <button onClick={guessClickHandler} disabled={!buttonState} >Guess the Spot</button>
        <button onClick={quitClickHandler} disabled={!buttonState}>I Give Up!</button> 
    </div>
)

}

export default GameButtons

// start,quit,guess -play buttons
//when start is pressed-> quit and guess enabled
// when quit/guess is pressed->start is enabled