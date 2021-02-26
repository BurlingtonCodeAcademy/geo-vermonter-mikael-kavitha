import { useState } from 'react'

function HandleClick({startClickHandler, guessClickHandler, quitClickHandler, buttonState}) { 

   


return (
    <div>
        <button onClick={startClickHandler} disabled={buttonState}>Start a Game</button>
        <button onClick={guessClickHandler} disabled={!buttonState}>Guess the Spot</button>
        <button onClick={quitClickHandler} disabled={!buttonState}>I Give Up!</button> 
    </div>
)

}

export default HandleClick