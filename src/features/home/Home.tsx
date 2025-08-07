import { useEffect, useState } from "react";
import styled from "styled-components";
import CountryCard from "../countryDetails/CountryCard";
import Loader from "../../ui/Loader";

const StyledHome = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.62rem;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<any>([]);

  useEffect(function () {
    async function fetchCountries() {
      try {
        setLoading(true);
        const res = await fetch("./data.json");
        const data = await res.json();
        console.log(data);
        setCountry(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchCountries();
  }, []);

  return (
    <StyledHome>
      {loading && <Loader />}
      {/* {loading && <p>Loading...</p>} */}
      {country.map(({ name, population, region, capital, flag }: any) => (
        <CountryCard
          key={name}
          flag={flag}
          countryName={name}
          population={population}
          region={region}
          capital={capital}
        />
      ))}
    </StyledHome>
  );
};
export default Home;
