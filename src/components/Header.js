import "./Header.css"
import Button from "./Button"


function Header() {
    const buttons = [
        {
          title: "Portfolio"
        }
      ]
    

    return (
        <div className= "header">
            <h2 className="Iam">jsem</h2>
            <h2 className="myName">Žaneta Sabadková</h2>
            <p className="text one">začínající</p>
            <p className="text two">Front-end</p>
            <p className="text three">developer</p>
            
            <Button mytitle={buttons[0].title}/>
        </div>
    )
}

export default Header;