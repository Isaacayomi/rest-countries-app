import CountryCard from "./CountryCard";

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
  return (
    <CountryCard
      flag={flag}
      countryName={countryName}
      population={population}
      region={region}
      capital={capital}
    />
  );
};
export default CountryDetails;
