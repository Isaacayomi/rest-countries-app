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
`;

type FlagProps = {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
};

const CountryDetails = ({
  countryName,
  flag,
  population,
  region,
  capital,
}: FlagProps) => {
  const {
    countryDetailsName,
    countryDetailsPopulation,
    countryDetailsRegion,
    countryDetailsCapital,
    countryDetailsFlag,
    countryDetailsTld,
    countryDetailsSubRegion,
  } = useSelector((state: any) => state.countries);
  const { light } = useSelector((state: any) => state.theme);

  return (
    <div className="mx-auto mt-[4rem] h-[17.24525rem] px-4">
      <img
        src={countryDetailsFlag}
        className="h-full w-full"
        alt="country flag"
      />

      <CountryHeading
        className={`pt-[2.75rem] ${light === true ? "dark: dark:text-white" : "text-[#111517]"}`}
      >
        {countryDetailsName}
      </CountryHeading>
      <div className="mb-[2rem] pt-[1rem] text-[0.875rem] leading-[2rem]">
        <p>
          <SubHeading>Native Name:</SubHeading> België
        </p>
        <p>
          <SubHeading>Population:</SubHeading> 11,319,511
        </p>
        <p>
          {" "}
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
          <SubHeading>Top Level Domain:</SubHeading> België
        </p>
        <p>
          <SubHeading>Currencies:</SubHeading> 11,319,511
        </p>
        <p>
          {" "}
          <SubHeading>Languages:</SubHeading> Dutch, French, German
        </p>
      </div>
      {/* <CountryCard
        flag={countryDetailsFlag}
        countryName={countryDetailsName}
        population={countryDetailsPopulation}
        region={countryDetailsRegion}
        capital={countryDetailsCapital}
      /> */}
    </div>
  );
};
export default CountryDetails;
