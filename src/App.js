import React, { useState, useEffect } from "react";
import Card from './components/Card';

import './App.css';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [updateOnResponse, setUpdateOnResponse] = useState({});

  let apiCounter = 0;
  let serverLimit = 3;

  const getData = () => {
    fetch('user-data.json')
      .then(response => response.json())
      .then(resJson => {
        setAllUsers(resJson);
        for (let i = 0; i < serverLimit; i++) {
          fetchUserDetails(i, resJson);
          apiCounter = i;
        }
      });
  }

  const fetchUserDetails = (counter, data) => {
    fetchAPIData(data[counter].id, data[counter].apiUrl).then(response => {
      setUpdateOnResponse(response);
      data[response.cardId - 1].apiResponse = response;
      apiCounter = apiCounter + 1;
      if (apiCounter < data.length) {
        fetchUserDetails(apiCounter, data);
      }
    });
  }

  async function fetchAPIData(id, url) {
    const response = await fetch(url);
    const data = await response.json();
    data.cardId = id;
    return data;
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 text-center">
              <h1>User List</h1>
            </div>
          </div>
          {allUsers.map((user, index) => <Card details={user} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;