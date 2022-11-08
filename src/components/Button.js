import "./Button.css"


function Button(props) {
    return(
        <div className="button"> 
            <a href="#">{props.mytitle}</a>
        </div>
    )
}

export default Button