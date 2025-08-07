import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledSelect = styled.div.attrs((props: any) => ({
  className: props.className,
}))`
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
  padding-right: 3.88rem;
  /* background-color: green; */

  @media (min-width: 1024px) {
    font-size: 0 875rem;
  }
`;

const Option = styled.option.attrs((props: any) => ({
  className: props.className,
}))`
  outline: none;
  border-radius: 0.3125rem;
  /* background: #fff; */
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
`;

function Filter() {
  const { light } = useSelector((state: any) => state.theme);
  return (
    <StyledSelect
      className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
    >
      <SelectField
        defaultValue=""
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
        <Option
          value="Africa"
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
        >
          Africa
        </Option>
        <Option
          value="America"
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
        >
          America
        </Option>
        <Option
          value="Europe"
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
        >
          Europe
        </Option>
        <Option
          value="Asia"
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
        >
          Asia
        </Option>
        <Option
          value="Oceania"
          className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
        >
          Oceania
        </Option>
      </SelectField>
    </StyledSelect>
  );
}

export default Filter;
