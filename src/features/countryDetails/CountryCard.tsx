import styled from "styled-components";
import { Link, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CountryDetails from "./CountryDetails";
import { countryDetails } from "./countryDetailsSlice";
import type { ReactElement } from "react";

type FlagProps = {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  nativeNameObj?: Record<string, { official: string; common: string }>;
  subRegion?: string;
  tld?: string[];
  currencies?: any;
  languages?: any;
};

const StyledContainer = styled.div.attrs((props: any) => ({
  className: props.className,
}))`
  max-width: 23.4375rem;
  width: 100%;
  /* max-width: 16.6875rem; */
  margin-inline: auto;
  border-radius: 0.3125rem;
  /* background: #fff; */
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  padding-bottom: 2.88rem;
  text-decoration: none;
  margin-bottom: 2.5rem;
`;

const Flag = styled.img`
  width: 100%;
  padding-bottom: 1.5rem;
`;

const CountryName = styled.h3`
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  /* color: #111517; */
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
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
`;

function CountryCard({
  countryName,
  population,
  nativeNameObj,
  region,
  capital,
  flag,
  tld,
  subRegion,
  currencies,
  languages,
}: FlagProps) {
  const { light } = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const onDetailsPage = location.pathname === "country-details";
  return (
    <StyledLink
      onClick={(e: React.MouseEvent<HTMLLinkElement>) =>
        onDetailsPage
          ? e.preventDefault()
          : dispatch(
              countryDetails({
                countryName,
                nativeNameObj,
                population,
                region,
                capital,
                flag,
                tld,
                subregion: subRegion,
                currencies,
                languages,
              }),
            )
      }
      to={onDetailsPage ? "#" : "/country-details"}
    >
      <StyledContainer
        className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-2xl" : "shadow:lg bg-white text-[#111517]"}`}
      >
        <Flag src={flag} alt={`${countryName} flag`} />
        <CountryName>{countryName}</CountryName>
        <Population>
          Population: <FlagDetails>{population}</FlagDetails>
        </Population>
        <Region>
          Region: <FlagDetails>{region}</FlagDetails>
        </Region>
        <Capital>
          Capital: <FlagDetails>{capital}</FlagDetails>
        </Capital>
      </StyledContainer>
    </StyledLink>
  );
}
export default CountryCard;
