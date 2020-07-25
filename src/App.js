import React from 'react';
import './App.css';
import Axios from 'axios'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Recipe from './components/Recipe'
import Alert from "./components/Alert";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "4f80f3a2";
  const APP_KEY = "64333253e96ea258752e13b32b8cd82f	";
  const Url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(Url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();

  };

  const onChange = (e) => { 
    setQuery(e.target.value);

  };
  return (
    <div className="App">
      <h1 onClick={getData}>Sulo Recipes</h1>
    <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}

      <input type="text" placeholder="Search, ex: pizza" autoComplete="off" 
      onChange={onChange}
      value={query}></input>
      <input type="submit" value="search"></input>
    </form>
    <div className="recipes">
      {/* 
      first we check if the array is empty (no result ) then dont show anything
      .map loops through the elements of the array and then we access them using the recipe key

      */}
      {recipes !== [] && recipes.map(recipe => 
      <Recipe key={uuidv4()} recipe={recipe}/>)}
    </div>
    </div>

  );
}

export default App;

