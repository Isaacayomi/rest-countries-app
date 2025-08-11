import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import styled from "styled-components";

const CountryHeading = styled.h4.attrs((props: any) => ({
  className: props.className,
}))`
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const SubHeading = styled.span.attrs((props: any) => ({
  className: props.className,
}))`
  font-weight: bolder;
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

type FlagProps = {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  currencies?: string;
  languages?: string;
};

const CountryDetails = () => {
  const {
    countryName, // official name from state
    countryDetailsName, // native name
    countryDetailsPopulation,
    countryDetailsRegion,
    countryDetailsCapital,
    countryDetailsFlag,
    countryDetailsTld,
    countryDetailsSubRegion,
    countryDetailsCurrencies,
    countryDetailsLanguages,
  } = useSelector((state: any) => state.countries);

  const { light } = useSelector((state: any) => state.theme);

  return (
    <div className="mx-auto mt-[4rem] overflow-hidden px-4 lg:flex lg:items-center lg:gap-[5.02rem] lg:text-[1rem]">
      <img
        src={countryDetailsFlag}
        className="h-[17.24525rem] w-full lg:w-[45%]"
        alt="country flag"
      />
      <div>
        <CountryHeading
          className={`pt-[2.75rem] ${
            light === true ? "dark: dark:text-white" : "text-[#111517]"
          }`}
        >
          {countryName}
        </CountryHeading>
        <div className="lg:flex lg:items-center lg:gap-[7.31rem]">
          <div className="mb-[2rem] pt-[1rem] text-[0.875rem] leading-[2rem]">
            <p>
              <SubHeading>Native Name:</SubHeading> {countryDetailsName}
            </p>
            <p>
              <SubHeading>Population:</SubHeading> {countryDetailsPopulation}
            </p>
            <p>
              <SubHeading>Region:</SubHeading> {countryDetailsRegion}
            </p>
            <p>
              <SubHeading>Sub Region:</SubHeading> {countryDetailsSubRegion}
            </p>
            <p>
              <SubHeading>Capital:</SubHeading> {countryDetailsCapital}
            </p>
          </div>

          <div className="mb-[2.12rem] pt-[1rem] leading-[2rem]">
            <p>
              <SubHeading>Top Level Domain:</SubHeading>
              {countryDetailsTld}
            </p>
            <p>
              <SubHeading>Currencies:</SubHeading> {countryDetailsCurrencies}
            </p>
            <p>
              <SubHeading>Languages:</SubHeading> {countryDetailsLanguages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
