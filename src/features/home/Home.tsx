import { useEffect, useState } from "react";
import styled from "styled-components";
import CountryCard from "../countryDetails/CountryCard";
import Loader from "../../ui/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../countryDetails/countryDetailsSlice";
import { ALL_COUNTRIES_URL } from "../../constant";
import { setAllCountries } from "../Filter/filterSlice";

const StyledHome = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4.62rem;
  }
`;

// const Home = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const { countries } = useSelector((state: any) => state.countries);
//   const { searchedCountry, search } = useSelector((state: any) => state.search);
//   const { filter, filteredCountries } = useSelector(
//     (state: any) => state.filter,
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     async function getCountries() {
//       try {
//         setLoading(true);
//         const res = await fetch(ALL_COUNTRIES_URL);
//         const data = await res.json();
//         dispatch(setAllCountries(data));

//         dispatch(fetchCountries(data));
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getCountries();
//   }, [dispatch]);

//   function parseCurrencies(currencies: any): string {
//     if (!currencies) return "N/A";
//     return Object.values(currencies)
//       .map((currency: any) => currency.name)
//       .join(", ");
//   }

//   function parseLanguages(languages: any): string {
//     if (!languages) return "N/A";
//     return Object.values(languages).join(", ");
//   }

//   return (
//     <>
//       {loading && <Loader />}

//       <StyledHome>
//         {loading && <Loader />}

//         {search?.length > 0
//           ? searchedCountry.map(
//               ({
//                 name,
//                 population,
//                 region,
//                 capital,
//                 flags,
//                 id,
//                 tld,
//                 subregion,
//                 currencies,
//                 languages,
//               }: any) => (
//                 <CountryCard
//                   key={id || name.common}
//                   flag={flags?.png}
//                   countryName={name.common}
//                   population={population.toLocaleString()}
//                   region={region}
//                   capital={capital?.[0] || "N/A"}
//                   subRegion={subregion ?? "N/A"}
//                   tld={tld ?? []}
//                   currencies={parseCurrencies(currencies)}
//                   languages={parseLanguages(languages)}
//                 />
//               ),
//             )
//           : filter && filteredCountries.length > 0
//             ? filteredCountries.map(
//                 ({
//                   name,
//                   population,
//                   region,
//                   capital,
//                   flags,
//                   id,
//                   tld,
//                   subregion,
//                   currencies,
//                   languages,
//                 }: any) => (
//                   <CountryCard
//                     key={id || name.common}
//                     flag={flags?.png}
//                     countryName={name.common}
//                     population={population}
//                     region={region}
//                     capital={capital?.[0] || "N/A"}
//                     subRegion={subregion ?? "N/A"}
//                     tld={tld ?? []}
//                     currencies={parseCurrencies(currencies)}
//                     languages={parseLanguages(languages)}
//                   />
//                 ),
//               )
//             : countries.map(
//                 ({
//                   name,
//                   population,
//                   region,
//                   capital,
//                   flags,
//                   id,
//                   tld,
//                   subregion,
//                   currencies,
//                   languages,
//                 }: any) => (
//                   <CountryCard
//                     key={id || name.common}
//                     flag={flags?.png}
//                     countryName={name.common}
//                     population={population}
//                     region={region}
//                     capital={capital?.[0] || "N/A"}
//                     subRegion={subregion ?? "N/A"}
//                     tld={tld ?? []}
//                     currencies={parseCurrencies(currencies)}
//                     languages={parseLanguages(languages)}
//                   />
//                 ),
//               )}
//       </StyledHome>
//     </>
//   );
// };

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

  function parseCurrencies(currencies: any): string {
    if (!currencies) return "N/A";
    return Object.values(currencies)
      .map((currency: any) => currency.name)
      .join(", ");
  }

  function parseLanguages(languages: any): string {
    if (!languages) return "N/A";
    return Object.values(languages).join(", ");
  }

  // 🔹 Combine filter + search here
  let countriesToShow = countries;

  if (filter && filteredCountries.length > 0) {
    countriesToShow = filteredCountries;
  }

  if (search?.length > 0) {
    countriesToShow = countriesToShow.filter((c: any) =>
      c.name.common.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <>
      {loading && <Loader />}

      <StyledHome>
        {countriesToShow.map(
          ({
            name,
            population,
            region,
            capital,
            flags,
            id,
            tld,
            subregion,
            currencies,
            languages,
          }: any) => (
            <CountryCard
              key={id || name.common}
              flag={flags?.png}
              countryName={name.common}
              population={population.toLocaleString()}
              region={region}
              capital={capital?.[0] || "N/A"}
              subRegion={subregion ?? "N/A"}
              tld={tld ?? []}
              currencies={parseCurrencies(currencies)}
              languages={parseLanguages(languages)}
            />
          ),
        )}
      </StyledHome>
    </>
  );
};

export default Home;
