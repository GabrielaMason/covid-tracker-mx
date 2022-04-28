import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import GralData from './Components/GralData/GralDataView';
import Probabilities from './Components/Probabilities/ProbabilitiesView';

function App() {
  return (
    <div className="App">
      <Header />
      <GralData />
      <Probabilities />
    </div>
  );
}

export default App;
