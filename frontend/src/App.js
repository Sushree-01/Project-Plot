import logo from './logo.svg';
import './App.css';
import Prices from './Components/prices/Prices'
import Homepage from './Components/HomePage/Homepage';
import Navbar from './Components/NavComponents/Navbar';
import Payment from './Components/prices/Payment';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Homepage/> */}
      <Prices/>
      <Payment/>
    </div>
  );
}

export default App;
