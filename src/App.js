import Skill from "./components/Skill"
import Header from "./components/Header"

function App() {
  return (
      <div className="app"> 
          <Header />
          
          <h1>S čím jsem už pracovala</h1>

          <div className="all-skills">
          
            <Skill />
            <Skill />
            <Skill />
          </div>
      </div>
  );
}

export default App;
