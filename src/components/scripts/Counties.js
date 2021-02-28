//import { Renderer } from "leaflet";
import { useState } from "react";
import InfoBar from './InfoBar'


function Counties(props) {

  const [chosen, setChosen] = useState(null);
  //this state shows the selected county by the player
  const [countySelected, setCountySelected] = useState('');
  //this is the fetched county and it will be used to compare landed county and selected countya re same
  //const [countyCompare, setCountyCompare] = useState("")
  let countyCompare
  //const [countyData, setCountyData] = useState({})
  const [data, setData] = useState();
  //let data
  const [buttonToggle, setToggle] = useState(true);
const[score,setScore] = useState(props.score);

  console.log('fetchO ' + countyCompare)

  // Function
  function changeSelection(evt) {

    setCountySelected(evt.target.value);
    RealCountyFetch();
    console.log('fetchChangeSel+ ' + countyCompare);
  }
  //function for selecting the counties, on submit the selected value is equal to the county chosen
  function SubmitCountyForm(evt) {
    // this makes sure the page is not refreshed once the button is triggered
    evt.preventDefault();
    RealCountyFetch()
    GuessCorrect()

    //setChosen({countySelected});
    console.log(' countySelect' + countySelected + ' countyReal ' + countyCompare)
  }


  function GuessCorrect() {
    if (countySelected !== '') {
      if (countySelected !== countyCompare) { 
        
      setScore(score-10)
     // setToggle(false)
        alert('Guess Wrong') }
      else {
        setToggle(false)
        alert('Guess correct')
        //return { Latitude: countyData && countyData.lat , Longitude: countyData && countyData.lat,
        //   Town: countyData.address.city, County: countyData.address.county }
      }
    } else {
      alert('Choose a county')
    }
  }
  //}
  //fetching the data of the county to compare if guess is rite or wrong
function RealCountyFetch(){

    
   fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${props.latRandom}&lon=${props.longRandom}&format=json`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          console.log(jsonObj);
          setData(jsonObj)
        });
     
      countyCompare = data && data.address.county
      console.log('fetchInside ' + countyCompare)
      //return true;
  }
console.log(score)
  return (

    <>
    {buttonToggle 
    && <InfoBar score={score} county={'?'} town={'?'} latitude={'?'} longitude={'?'} />}
    
    {!buttonToggle && <InfoBar score={score} county={countyCompare}
    latitude={props.latRandom}
    longitude= {props.longRandom}/>}

    <div style={{ height: '100px', width: '300px', border: '1px solid black', backgroundColor: "gray", position: "absolute", zIndex: 500 }}>

      <div>
        <h5>{chosen ? `Hello,you guessed ${countySelected}` : `Are you ready to Guess the County ?`}</h5>

        <form onSubmit={SubmitCountyForm}>
          <select name='County Selection' value={countySelected} onChange={changeSelection}>
            <option value="Choose a County">Please Choose a County</option>
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
          <input type="submit" value="Guess" />
          <input type="submit" value="Cancel" onClick={(evt) => { props.guessBox(false) }} />
         
          </form>
          
         
        
        </div>
       
    </div>
    </>
  )
  }
export default Counties;


/*onClick={(evt)=>{buttonToggle=false}}
{!buttonToggle && <InfoBar county={countyCompare}
latitude={props.latRandom}
longitude= {props.longRandom}/>}*/