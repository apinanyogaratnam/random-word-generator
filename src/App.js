import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get('https://random-word-form.herokuapp.com/random/noun');
    setData(result.data[0]);
  }

  return (
    <div className="App">
      <h1>Hello There Mr.Atlanta</h1>
      <h1>Word generated: {data}</h1>
      <div class = "buttonOne">
        <button type ="button_one" class = "button1" onClick={fetchData}> Test </button>
      </div>
    </div>
  );
}

export default App;