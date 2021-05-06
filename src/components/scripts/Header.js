import NavBar from "./NavBar.js";

// Header component containing name of game and navigation bar
function Header(props) {
    return (
        <div>
            <header id="header">
               
                <h1 id="titleDiv" >Geo-Vermonter</h1>

                <NavBar
        score={props.score}
        setViewInstructions={props.setViewInstructions}
        viewHighScore={props.viewHighScore}
        setViewHighScore={props.setViewHighScore}
      />
               

            </header>
        </div>
    );
}

export default Header;
