import { useState } from 'react'

// function disables start button when pressed as well as enables the guess and quit buttons
function GameButtons({startClickHandler, guessClickHandler, quitClickHandler, buttonState}) { 

   


return (
    <div> 
        {/* when pressed start button is disabled, quit and guess are enabled */}
        <button className="buttonStyle" onClick={startClickHandler} disabled={buttonState}>Start a Game</button>
        {/* when pressed the guessBox modal appears */}
        <button className="buttonStyle" onClick={guessClickHandler} disabled={!buttonState} >Guess the Spot</button>
        {/* when pressed the InfoBar displays the marker's town, county, lat, long, */}
        <button className="buttonStyle" onClick={quitClickHandler} disabled={!buttonState}>I Give Up!</button> 
    </div>
)

}

export default GameButtons
