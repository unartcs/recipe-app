import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
    <Grid>
      {/* <div>{params.type}</div> */}
      {searched.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={"/recipe/" + recipe.id} >
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    font-size: 0.8rem;
    text-align: center;
    padding: 0.5rem;
  }
`;
export default Searched;
