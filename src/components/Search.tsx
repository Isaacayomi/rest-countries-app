import styled from "styled-components";
import SEARCH_ICON from "../assets/images/search.png";

const Label = styled.label`
  max-width: 21.4375rem;
  width: 100%;
  margin-inline: auto;
  border-radius: 0.3125rem;
  background: #fff;
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
const Input = styled.input`
  color: #c4c4c4;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
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
  return (
    <>
      <Label>
        <SearchIcon src={SEARCH_ICON} alt="search icon" />
        <Input
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
        />
      </Label>
    </>
  );
}
export default Search;
