import styled from "styled-components";
import SEARCH_ICON from "../../assets/images/search.png";
import { useDispatch, useSelector } from "react-redux";
import { filterSearchedCountry, setSearch } from "./searchSlice";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";
import {
  filterCountries, // Changed from fetchCountries to filterCountries for search results
  resetCountryDetails,
} from "../countryDetails/countryDetailsSlice";
import Loader from "../../ui/Loader";
import ErrorComponent from "../../ui/ErrorComponent";

const Label = styled.label.attrs((props: any) => ({
  className: props.className,
}))`
  max-width: 23.4375rem;
  width: 100%;
  margin-inline: auto;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding-block: 1rem;
  display: flex;
  gap: 1.62rem;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (min-width: 1024px) {
    margin-inline: 0;
    max-width: 30rem;
  }
`;

const Input = styled.input.attrs((props: any) => ({
  className: props.className,
}))`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  outline: none;
  border: none;

  @media (min-width: 1024px) {
    font-size: 0.875rem;
  }
`;

const SearchIcon = styled.img`
  padding-left: 2rem;
`;

function Search() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { light } = useSelector((state: any) => state.theme);
  const { search, searchedCountry } = useSelector((state: any) => state.search);
  const { allCountries } = useSelector((state: any) => state.countries); // Get allCountries from Redux

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearch(value));

    if (!value.trim()) {
      dispatch(resetCountryDetails());
      // Reset to show all countries when search is cleared
      dispatch(filterCountries(allCountries));
    } else {
      dispatch(filterSearchedCountry(allCountries));
    }
  };

  useEffect(() => {
    async function getSearchedCountry() {
      if (!search.trim()) {
        setLoading(false);
        setError(false);
        // Show all countries when search is empty
        dispatch(filterCountries(allCountries));
        return;
      }

      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${BASE_URL}/name/${search}`);
        if (!res.ok) {
          throw new Error("Country not found");
        }

        const data = await res.json();
        // FIXED: Use filterCountries instead of fetchCountries
        // This preserves the allCountries array while showing search results
        dispatch(filterCountries(data));
        setError(false);
      } catch (err) {
        setError(true);
        // On error, show all countries
        dispatch(filterCountries(allCountries));
      } finally {
        setLoading(false);
      }
    }

    getSearchedCountry();
  }, [search, dispatch, allCountries]);

  return (
    <>
      <Label
        className={`${
          light === true
            ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg"
            : "bg-white text-[#111517] shadow-lg"
        }`}
      >
        <SearchIcon src={SEARCH_ICON} alt="search icon" />
        <Input
          onChange={handleChange}
          value={search}
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
          className={`${
            light === true
              ? "dark: dark:bg-[#2B3844] dark:text-white"
              : "bg-white text-[#111517]"
          }`}
        />
      </Label>
      {loading && <Loader />}
      {error && <ErrorComponent />}
    </>
  );
}

export default Search;
