import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import GralData from './Components/GralData';
import Probabilities from './Components/Probabilities';

function App() {
  return (
    <div className="App">
      <Header />
      <GralData />
      <Probabilities />
     {/*<h1>Covid Tracker MX</h1>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h1>Datos gráficos del COVID</h1>
            <button className=''>Tracker</button>
          </div>
          <div className='col'>
            <h1>Tu probabilidad con el Covid</h1>
            <button>Tendencias</button>
          </div>
        </div>
  </div> */}
    </div>
  );
}

export default App;
