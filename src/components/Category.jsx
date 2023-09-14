import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={`/cuisine/American`}>
        <FaHamburger />
        <h4> American</h4>
      </SLink>
      <SLink to={`/cuisine/Italian`}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={`/cuisine/Thai`}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={`/cuisine/Japanese`}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
  gap: 1rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  margin: 1rem;
  background: linear-gradient(215deg, violet, lightblue);
  width: 5rem;
  height: 5rem;
  &:hover {
    background: linear-gradient(215deg, purple, blue);
    transform: scale(1.02);
    transition: all ease-in-out 0.2s;
  }
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(215deg, purple, blue);
    transform: scale(1.02);
    transition: all ease-in-out 0.2s;
  }
`;
export default Category;
