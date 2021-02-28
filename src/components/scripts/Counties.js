import { useState } from "react";
import GameButtons from './GameButtons'

function Counties(props) {

  const [chosen, setChosen] = useState(null);
//this state shows the selected county by the player
  const [countySelected, setCountySelected] = useState('');
  //Modal display-only opens when guess clicked
  const[modal,setModal]=useState(false)
  const[countyCompare,setCountyCompare]=useState("")
  
  // Function to set the modal(dialog box)
function showModal(){
  setModal(true)
}

// Function
function changeSelection(evt) {
    setCountySelected(evt.target.value);
  }
//function for selecting the counties, on submit the selected value is equal to the county chosen
  function SubmitCountyForm(evt) {
    // this makes sure the page is not refreshed once the button is triggered
    evt.preventDefault();
    //GuessCorrect()
    setChosen(countySelected);
  console.log(countySelected)
  }


 // function GuessCorrect(){
  
    //  if(countySelected !== data.address.county){
     //   alert(`Correct`)} else{
       //   alert(`Wrong`)
      //  }
//}
//fetching the data of the county to compare if guess is rite or wrong
function fetch(){
 let fetchData=fetch (
    `https://nominatim.openstreetmap.org/reverse?lat=${props.latRandom}&lon=${props.longRandom}&format=json` 
  )
    .then((res) => res.json())
    .then((jsonObj) => {
      console.log(jsonObj);
      setCountyCompare(jsonObj);
    });
  }


  return (
// <div hidden={!guessClickHandler}>
    <div style = {{height: '100px', width: '200px', border: '1px solid black', backgroundColor:"gray", position:"absolute", zIndex: 500 }}>
      What County are we in?
      <div>
      <h5>{chosen ? `Hello,you guessed ${countySelected}`:`Guess the County ${setCountyCompare}` }</h5>

      <form onSubmit={SubmitCountyForm}>
        <select name='County Selection' value={countySelected} onChange={changeSelection}>
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
        <input type="submit" value='Guess'/>
      </form>
      </div>
   <button onClick={(evt)=>{modal(false)}}>Cancel</button>
    </div>
    //</div>
  )
  }

export default Counties;
