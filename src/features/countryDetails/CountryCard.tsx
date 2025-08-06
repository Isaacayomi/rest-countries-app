import styled from "styled-components";
import FLAG from "../../assets/images/flag.png";
import { Link } from "react-router";

type FlagProps = {
  countryName?: string;
  population?: number;
  region?: string;
  capital?: string;
};

const StyledContainer = styled.div`
  max-width: 16.6875rem;
  margin-inline: auto;
  border-radius: 0.3125rem;
  background: #fff;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  padding-bottom: 2.88rem;
  text-decoration: none;
  margin-bottom: 2.5rem;
`;

const Flag = styled.img`
  width: 100%;
  height: 10rem;
  padding-bottom: 1.5rem;
`;

const CountryName = styled.h3`
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  color: #111517;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.625rem; /* 144.444% */
`;
const Population = styled.p`
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
`;
const Region = styled.p`
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
`;
const Capital = styled.p`
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
`;

const FlagDetails = styled.span`
  font-style: normal;
  font-weight: 300;
  line-height: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111517;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 114.286% */
`;

function CountryCard({ countryName, population, region, capital }: FlagProps) {
  return (
    <StyledLink to="country-details">
      <StyledContainer>
        <Flag src={FLAG} alt=" flag" />
        <CountryName>Germany</CountryName>
        <Population>
          Population: <FlagDetails>81,770,900</FlagDetails>
        </Population>
        <Region>
          Region: <FlagDetails>Europe</FlagDetails>
        </Region>
        <Capital>
          Capital: <FlagDetails>Berlin</FlagDetails>
        </Capital>
      </StyledContainer>
    </StyledLink>
  );
}
export default CountryCard;
