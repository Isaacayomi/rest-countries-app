import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFilter, setFilterCountries } from "./filterSlice";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES_URL, BASE_URL } from "../../constant";

const StyledSelect = styled.div.attrs((props: any) => ({
  className: props.className,
}))`
  border: 1px solid red;
  max-width: 12.5rem;
  width: 100%;
  /* margin-inline: auto; */
  margin-right: 0;
  padding-block: 0.88rem;
  padding-inline: 1rem;
  outline: none;
  border: none;
  border-radius: 0.3125rem;
  /* background: #fff; */
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  margin-left: 1rem;
  margin-bottom: 2rem;
`;

const SelectField = styled.select.attrs((props: any) => ({
  className: props.className,
}))`
  outline: none;
  border: none;

  @media (min-width: 1024px) {
    font-size: 0.875rem;
  }
`;

const Option = styled.option.attrs((props: any) => ({
  className: props.className,
}))`
  outline: none;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
`;

function Filter() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { light } = useSelector((state: any) => state.theme);

  const { filter } = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilter(e.target.value));
  }

  useEffect(() => {
    if (!filter) return;

    async function fetchFilteredCountries() {
      try {
        setLoading(true);
        setError(false);

        if (filter === "all") {
          const res = await fetch(`${ALL_COUNTRIES_URL}`);
          if (!res.ok) throw new Error("Countries not found");

          const data = await res.json();
          dispatch(setFilterCountries(data));
        } else {
          // Specific region
          const res = await fetch(`${BASE_URL}/region/${filter}`);
          if (!res.ok) throw new Error("Countries not found");

          const data = await res.json();
          dispatch(setFilterCountries(data));
        }
      } catch (err) {
        setError(true);
        dispatch(setFilterCountries([]));
      } finally {
        setLoading(false);
      }
    }

    fetchFilteredCountries();
  }, [filter, dispatch]);

  return (
    <div className="ml-[1rem] border-red-500">
      <StyledSelect
        className={` ${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
      >
        <SelectField
          onChange={handleChange}
          value={filter}
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white" : "bg-white text-[#111517]"}`}
        >
          <Option
            value=""
            disabled
            hidden
            className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
          >
            Filter by region
          </Option>
          {["all", "africa", "america", "europe", "asia", "oceania"].map(
            (region) => (
              <Option
                key={region}
                value={region}
                className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
              >
                {region.charAt(0).toUpperCase() + region.slice(1)}
              </Option>
            ),
          )}
        </SelectField>
      </StyledSelect>
    </div>
  );
}

export default Filter;
