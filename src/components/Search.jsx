import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+input)
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input type="text" onChange={inputHandler} value={input}/>
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 2rem 10rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    // background: linear-gradient(1deg, white, grey);
    background: #919191;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
  input:focus {
    background: #313131;
  }
`;
export default Search;
