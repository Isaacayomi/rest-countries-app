import styled from "styled-components";
import CountryCard from "../countryDetails/CountryCard";

const StyledHome = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.62rem;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <CountryCard />
    </StyledHome>
  );
};
export default Home;
