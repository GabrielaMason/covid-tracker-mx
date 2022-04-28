import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import GralData from './Components/GralData/GralDataView';
import Probabilities from './Components/Probabilities/ProbabilitiesView';
import React, {useEffect, useState} from 'react'
import axios from "axios";

function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(res => {
      setInfo(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <GralData  data={info}/>
      <Probabilities  data={info}/>
    </div>
  );
}

export default App;
