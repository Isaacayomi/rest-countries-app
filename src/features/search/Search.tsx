import styled from "styled-components";
import SEARCH_ICON from "../../assets/images/search.png";
import { useDispatch, useSelector } from "react-redux";
import {
  filterSearchedCountry,
  setSearch,
  // filterSearchedCountry,
} from "./searchSlice";
import { useEffect, useState } from "react";
import { BASE_URL, SEARCH_URL } from "../../constant";
import { fetchCountries } from "../countryDetails/countryDetailsSlice";
import Loader from "../../ui/Loader";

const Label = styled.label.attrs((props: any) => ({
  className: props.className,
}))`
  max-width: 21.4375rem;
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
  const allCountries = useSelector((state: any) => state.countries.countries);

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
    dispatch(filterSearchedCountry(allCountries));
  };

  useEffect(() => {
    async function getSearchedCountry() {
      if (!search.trim()) {
        setLoading(false);
        setError(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);

        const res = await fetch(`${SEARCH_URL}/name/${search}`);
        if (!res.ok) {
          throw new Error("Country not found");
        }

        const data = await res.json();
        dispatch(fetchCountries(data));
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getSearchedCountry();
  }, [search, dispatch]);

  return (
    <>
      <Label
        className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
      >
        <SearchIcon src={SEARCH_ICON} alt="search icon" />
        <Input
          onChange={handleChange}
          value={search}
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white" : "bg-white text-[#111517]"}`}
        />
      </Label>
      {loading && <Loader />}
      {error && (
        <p className="border border-red-500 bg-purple-600">Country not found</p>
      )}
    </>
  );
}
export default Search;
