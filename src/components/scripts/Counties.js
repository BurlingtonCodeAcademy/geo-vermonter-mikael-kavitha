import { useState } from "react";


function Counties(props) {
  const [chosen, setChosen] = useState(null);
  const [selected, setSelected] = useState("Select County");

  function changeSelection(evt) {
    setSelected(evt.target.value);
  }
//function for selecting the counties, on submit the selected value is equal to the county chosen
  function SubmitCounty(evt) {
    evt.preventDefault();
    setChosen({
      chosen: selected,
    });
  console.log(selected)
  }

  return (
    <div>
      <h1>What County are we now?</h1>
      <h1>{chosen ? `Hello you guessed ${selected}`:`Guess the County` }</h1>

      <form onSubmit={SubmitCounty}>
        <select name='County Selection' value={selected} onChange={changeSelection}>
          <option value="Addison County">Addison</option>
          <option value="Bennington County">Bennington</option>
          <option value="Caledonia County">Caledonia</option>
          <option value="Chittenden County">Chittenden</option>
          <option value="Essex County">Essex</option>
          <option value="Franklin County">Franklin</option>
          <option value="Grand Isle County">Grand Isle</option>
          <option value="Lamoille County">Lamoille</option>
          <option value="Orange County">Orange</option>
          <option value="Orlenes County">Orlenes</option>
          <option value="Rutland County">Rutland</option>
          <option value="Washington County">Washington</option>
          <option value="Windham County">Windham</option>
          <option value="Windsor County">Windsor</option>
        </select>
        <input type="submit" value="Guess The Spot"/>
      </form>
   
    {/*<button onClick={(evt)=>{guessClickHandler()}}>Guess</button>*/}
    </div>
  );
}

export default Counties;
