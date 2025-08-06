import styled from "styled-components";

const StyledSelect = styled.div`
  border: 1px solid red;
  max-width: 12.5rem;
  width: 100%;
  margin-inline: auto;
  margin-right: 0;
  padding-block: 0.88rem;
  padding-inline: 1rem;
  outline: none;
  border: none;
  border-radius: 0.3125rem;
  background: #fff;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  margin-left: 1rem;
  margin-bottom: 2rem;
`;

const SelectField = styled.select`
  outline: none;
  border: none;
  padding-right: 3.88rem;

  @media (min-width: 1024px) {
    font-size: 0 875rem;
  }
`;

const Option = styled.option`
  outline: none;
  border-radius: 0.3125rem;
  background: #fff;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
`;

function Filter() {
  return (
    <StyledSelect>
      <SelectField defaultValue="">
        <Option value="" disabled hidden>
          Filter by region
        </Option>
        <Option value="Africa">Africa</Option>
        <Option value="America">America</Option>
        <Option value="Europe">Europe</Option>
        <Option value="Asia">Asia</Option>
        <Option value="Oceania">Oceania</Option>
      </SelectField>
    </StyledSelect>
  );
}

export default Filter;
