

import './App.css';
import Project from './Components/NavComponents/Project/Project';
import Navroutes from './Mainroutes/Navroutes';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navroutes/>
      <Project/>
    </div>
  );
}

export default App;
