import styled, { ThemeProvider } from "styled-components";
import LIGHT_MOON from "../assets/images/light-moon.png";
import DARK_MOON from "../assets/images/dark-moon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/toggleTheme/themeSlice";
const H1 = styled.h1`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.25rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const StyledNav = styled.nav.attrs((props: any) => ({
  className: props.className,
}))`
  /* color: ; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-block: 1.88rem;
  /* background-color: white; */
  margin-bottom: 1.5rem;
  /* box-shadow: ; */
  max-width: 23.4375rem;
  width: 100%;
  margin-inline: auto;

  @media (min-width: 1024px) {
    max-width: 90rem;
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 0.5rem;
  cursor: pointer;
`;

const Mode = styled.p`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

function Header() {
  const { light } = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <>
      <StyledNav
        className={`${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
      >
        <H1>Where in the world?</H1>
        <Span onClick={() => dispatch(toggleTheme())}>
          <Mode>{light ? "Light Mode" : "Dark Mode"}</Mode>
          <img src={light ? DARK_MOON : LIGHT_MOON} alt="light-moon" />
        </Span>
      </StyledNav>
    </>
  );
}
export default Header;
