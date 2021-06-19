import React, { useState, useEffect } from "react";
import Card from './components/Card';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState([]);

  let apiCounter = 0;
  let serverLimit = 3;

  async function getData() {
    const response = await fetch('user-data.json')
    const data = await response.json();
    setUsers(data);
    for (let i = 0; i < serverLimit; i++) {
      fetchUserDetails(i, data);
      apiCounter = i;
    }
  }

  const fetchUserDetails = (counter, data) => {
    fetchAPIData(data[counter].id, data[counter].apiUrl).then(response => {
      setUserDetail((details) => {
        details[response.cardId - 1] = response;
        return [...details];
      });
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
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <h1>User List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {users.map((user, index) => <Card user={user} details={userDetail} cardId={index} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;