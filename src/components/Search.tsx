import styled from "styled-components";
import SEARCH_ICON from "../assets/images/search.png";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

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
  background-color: none;
  /* background-color: red; */
  /* color: #c4c4c4; */
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
  const { light } = useSelector((state: any) => state.theme);
  // const dispatch = useDispatch()
  return (
    <>
      <Label
        className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
      >
        <SearchIcon src={SEARCH_ICON} alt="search icon" />
        <Input
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white" : "bg-white text-[#111517]"}`}
        />
      </Label>
    </>
  );
}
export default Search;
