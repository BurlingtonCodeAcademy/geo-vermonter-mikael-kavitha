import { useState } from "react";

function Counties() {
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
      <form onSubmit={SubmitCounty}>
        <select value={selected} onChange={changeSelection}>
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
    </div>
  );
}

export default Counties;
