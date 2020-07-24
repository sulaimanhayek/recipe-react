import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { useState } from 'react';


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "4f80f3a2";
  const APP_KEY = "64333253e96ea258752e13b32b8cd82f	";
  const Url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await Axios.get(Url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
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
      <input type="text" placeholder="Search" autoComplete="off" 
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
        <h2>{recipe.recipe.label}</h2>)}
    </div>
    </div>

  );
}

export default App;


// TODO: get the recipe
