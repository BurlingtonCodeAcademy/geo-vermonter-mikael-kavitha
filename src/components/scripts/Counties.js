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
      <h1>{chosen ? `Hello you guessed ${chosen}`:`Guess the County` }</h1>

      <form onSubmit={SubmitCounty}>
        <select name='County Selection' value={selected} onChange={changeSelection}>
          <option value="addison">Addison</option>
          <option value="bennington">Bennington</option>
          <option value="caledonia">Caledonia</option>
          <option value="chittenden">Chittenden</option>
          <option value="essex">Essex</option>
          <option value="franklin">Franklin</option>
          <option value="grand isle">Grand Isle</option>
          <option value="lamoille">Lamoille</option>
          <option value="orange">Orange</option>
          <option value="orlenes">Orlenes</option>
          <option value="rutland">Rutland</option>
          <option value="washington">Washington</option>
          <option value="windham">Windham</option>
          <option value="windsor">Windsor</option>
        </select>
        <input type="submit" value="Guess The Spot"/>
      </form>
   
    {/*<button onClick={(evt)=>{guessClickHandler()}}>Guess</button>*/}
    </div>
  );
}

export default Counties;
