import React, { useState, useEffect } from "react";
import Card from './components/Card';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (response) {
      console.log(response)
      return response.json();
    })
      .then(function (myJson) {
        console.log(myJson);
      });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Card cardDetails="Test" />
    </div>
  );
}

export default App;
