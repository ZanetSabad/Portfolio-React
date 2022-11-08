import Skill from "./components/Skill"
import Header from "./components/Header"
import Navigace from "./components/Navigace"



function App() {
 


  return (

    <div className="app"> 

      <div className="head">
          <Navigace />
          <Header />
          
      </div>

      <div className="skills"> 
        
          <h1>S čím jsem už pracovala</h1>

          <div className="all-skills">
          
            <Skill />
            <Skill />
            <Skill />
          </div>
      </div>
      </div>
  );
}

export default App;
