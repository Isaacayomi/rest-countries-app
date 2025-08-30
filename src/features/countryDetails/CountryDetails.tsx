import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { countryDetails } from "./countryDetailsSlice";
import Loader from "../../ui/Loader";

const CountryHeading = styled.h4`
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const SubHeading = styled.span`
  font-weight: bolder;
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const CountryDetails = () => {
  const {
    countryName,
    countryDetailsBorders,
    countryDetailsFlag,
    countryDetailsName,
    countryDetailsPopulation,
    countryDetailsRegion,
    countryDetailsSubRegion,
    countryDetailsCapital,
    countryDetailsTld,
    countryDetailsCurrencies,
    countryDetailsLanguages,
  } = useSelector((state: any) => state.countries);

  const { light } = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();

  const [borderCountries, setBorderCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  // 🔹 Always fetch the latest full details for the current country
  useEffect(() => {
    if (!countryName) return;

    async function fetchCountryDetails() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
        );
        if (!res.ok) throw new Error("Failed to fetch country details");

        const [data] = await res.json();

        const payload = {
          countryName: data.name.common,
          nativeNameObj: data.name.nativeName,
          population: data.population,
          region: data.region,
          capital: data.capital?.[0] || "N/A",
          flag: data.flags?.png,
          tld: data.tld,
          subregion: data.subregion,
          currencies: data.currencies
            ? Object.values(data.currencies)
                .map((c: any) => c.name)
                .join(", ")
            : "N/A",
          languages: data.languages
            ? Object.values(data.languages).join(", ")
            : "N/A",
          borders: data.borders || [],
        };

        dispatch(countryDetails(payload));
      } catch (err) {
        console.error("Error fetching country details", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCountryDetails();
  }, [countryName, dispatch]);

  // 🔹 Fetch border countries whenever borders update
  useEffect(() => {
    if (!countryDetailsBorders || countryDetailsBorders.length === 0) {
      setBorderCountries([]);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    async function fetchBorders() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${countryDetailsBorders.join(",")}`,
          { signal: controller.signal },
        );
        if (!res.ok) throw new Error("Failed to fetch borders");

        const data = await res.json();
        setBorderCountries(data.map((c: any) => c.name.common));
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Error fetching border countries", err);
          setBorderCountries([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchBorders();
  }, [countryDetailsBorders]);

  // 🔹 Handle when a border is clicked
  async function handleBorderClick(borderName: string) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${borderName}?fullText=true`,
      );
      if (!res.ok) throw new Error("Failed to fetch border details");

      const [data] = await res.json();

      const payload = {
        countryName: data.name.common,
        nativeNameObj: data.name.nativeName,
        population: data.population,
        region: data.region,
        capital: data.capital?.[0] || "N/A",
        flag: data.flags?.png,
        tld: data.tld,
        subregion: data.subregion,
        currencies: data.currencies
          ? Object.values(data.currencies)
              .map((c: any) => c.name)
              .join(", ")
          : "N/A",
        languages: data.languages
          ? Object.values(data.languages).join(", ")
          : "N/A",
        borders: data.borders || [],
      };

      dispatch(countryDetails(payload));
    } catch (err) {
      console.error("Error fetching border details", err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader />;

  return (
    <div className="mx-auto mt-[4rem] overflow-hidden px-4 lg:grid lg:grid-cols-2 lg:gap-[5.02rem] lg:text-[1rem]">
      {/* Flag */}
      <div className="flex justify-start">
        <img
          src={countryDetailsFlag}
          className="h-[17.24525rem] w-full object-cover lg:w-[90%]"
          alt="country flag"
        />
      </div>

      {/* Right side content */}
      <div>
        <CountryHeading
          className={`pt-[2.75rem] ${
            light ? "dark: dark:text-white" : "text-[#111517]"
          }`}
        >
          {countryName}
        </CountryHeading>

        {/* Info sections */}
        <div className="lg:flex lg:items-start lg:gap-[7.31rem]">
          <div className="mb-[2rem] pt-[1rem] text-[0.875rem] leading-[2rem]">
            <p>
              <SubHeading>Native Name:</SubHeading> {countryDetailsName}
            </p>
            <p>
              <SubHeading>Population:</SubHeading>{" "}
              {countryDetailsPopulation.toLocaleString()}
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
              <SubHeading>Top Level Domain:</SubHeading> {countryDetailsTld}
            </p>
            <p>
              <SubHeading>Currencies:</SubHeading> {countryDetailsCurrencies}
            </p>
            <p>
              <SubHeading>Languages:</SubHeading> {countryDetailsLanguages}
            </p>
          </div>
        </div>

        {/* Border Countries */}
        <div className="flex flex-wrap items-center gap-[0.62rem] pb-4">
          <span className="mr-2 font-semibold">Border countries:</span>

          {borderCountries.length > 0 ? (
            borderCountries.map((border) => (
              <button
                key={border}
                onClick={() => handleBorderClick(border)}
                className="border border-[#979797] px-[1.69rem] pb-[0.31rem]"
              >
                <span>{border}</span>
              </button>
            ))
          ) : (
            <span>None</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
