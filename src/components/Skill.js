import "./Skill.css"
import CardMedia from '@mui/material/CardMedia';

function Skill() {
    return(
        <div className="skill"> 
            
            <div>
                <h2>HTML</h2>
            </div>
            <div>
                <CardMedia
                component="img"
                height="140"
                image="./html.png"
                />
            </div>
        </div>
    )
}

export default Skill