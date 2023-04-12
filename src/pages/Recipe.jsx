import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from "react";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <RecipeWrapper>
      <Summary>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
      </Summary>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <div>
            <ul>
              {details.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          </div>
        )}
      </Info>
    </RecipeWrapper>
  );
}

const Summary = styled.div`
  max-width: 40rem;
  min-height: 15rem;
  min-width: 15rem;
  border-radius: 2rem;
  img {
    border-radius: 2rem;
  }
  h3 {
    font-size: 1rem;
    width: 100%;
    line-height: 1.8rem;
  }
`;
const RecipeWrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #313131, #919191);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
  // min-height: 15rem;
  // min-width: 15rem;
  // width: 100%;
`;
export default Recipe;
