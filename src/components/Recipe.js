import React, { useState } from "react";
import RecipeDetails from './RecipeDetails'
const Recipe = ({recipe}) => {
    const {label, image, url, ingradients} = recipe.recipe;
    return (
        <div className="recipe">

    <h2>{label}</h2>
    <img src={image} alt={label}></img>
    <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
        <button>ingradients</button>
        <RecipeDetails></RecipeDetails>
        </div>
    )
}

export default Recipe
