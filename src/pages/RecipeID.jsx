import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from "react";

function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState("");

  const getRecipe = async (id) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/card?apiKey=${process.env.REACT_APP_API_KEY}`)
    // const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    const recipe = await data.json();
    console.log(recipe)
    setRecipe(recipe)
  }
  useEffect(() => {
    console.log('Test')
    console.log(params);
    // getRecipe(params.id)
  }, [params.id]);

  return (
    <div>
      <div>
        <img src={recipe.url} alt='Recipe'/>
      </div>
    </div>
  );
}

export default Recipe;
