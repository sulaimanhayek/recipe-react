import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { useState } from 'react';


function App() {
  const [query, setQuery] = useState("");

  const APP_ID = "4f80f3a2";
  const APP_KEY = "64333253e96ea258752e13b32b8cd82f	";
  const Url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await Axios.get(Url);
    console.log(result);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();

  }

  const onChange = (e) => { 
    setQuery(e.target.value);

  }
  return (
    <div className="App">
      <h1 onClick={getData}>Sulo Recipes</h1>
    <form className="search-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Search" autoComplete="off" onChange={onChange}></input>
      <input type="submit" value="search"></input>
    </form>
    </div>

  );
}

export default App;
