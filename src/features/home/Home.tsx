import { useEffect, useState } from "react";
import styled from "styled-components";
import CountryCard from "../countryDetails/CountryCard";
import Loader from "../../ui/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../countryDetails/countryDetailsSlice";
import { ALL_COUNTRIES_URL } from "../../constant";

const StyledHome = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.62rem;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { countries } = useSelector((state: any) => state.countries);
  const { searchedCountry, search } = useSelector((state: any) => state.search);
  const { filter, filteredCountries } = useSelector(
    (state: any) => state.filter,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCountries() {
      try {
        setLoading(true);
        const res = await fetch(ALL_COUNTRIES_URL);
        const data = await res.json();
        dispatch(fetchCountries(data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}

      <StyledHome>
        {loading && <Loader />}

        {search?.length > 0
          ? searchedCountry.map(
              ({ name, population, region, capital, flags, id }: any) => (
                <CountryCard
                  key={id || name.common}
                  flag={flags?.png}
                  countryName={name.common}
                  population={population}
                  region={region}
                  capital={capital?.[0] || "N/A"}
                />
              ),
            )
          : filter && filteredCountries.length > 0
            ? filteredCountries.map(
                ({ name, population, region, capital, flags, id }: any) => (
                  <CountryCard
                    key={id || name.common}
                    flag={flags?.png}
                    countryName={name.common}
                    population={population}
                    region={region}
                    capital={capital?.[0] || "N/A"}
                  />
                ),
              )
            : countries.map(
                ({ name, population, region, capital, flags, id }: any) => (
                  <CountryCard
                    key={id || name.common}
                    flag={flags?.png}
                    countryName={name.common}
                    population={population}
                    region={region}
                    capital={capital?.[0] || "N/A"}
                  />
                ),
              )}
      </StyledHome>

      {/* <StyledHome>
        {search?.length > 0 &&
          searchedCountry.map(
            ({ name, population, region, capital, flags, id }: any) => (
              <CountryCard
                key={id || name.common}
                flag={flags?.png}
                countryName={name.common}
                population={population}
                region={region}
                capital={capital?.[0] || "N/A"}
              />
            ),
          )}

        {search?.length === 0 &&
          countries.map(
            ({ name, population, region, capital, flags, id }: any) => (
              <CountryCard
                key={id || name.common}
                flag={flags?.png}
                countryName={name.common}
                population={population}
                region={region}
                capital={capital?.[0] || "N/A"}
              />
            ),
          )}

        {filteredCountries.length > 0 &&
          filteredCountries.map(
            ({ name, population, region, capital, flags, id }: any) => (
              <CountryCard
                key={id || name.common}
                flag={flags?.png}
                countryName={name.common}
                population={population}
                region={region}
                capital={capital?.[0] || "N/A"}
              />
            ),
          )}
      </StyledHome> */}
    </>
  );
};

export default Home;
