import styled, { ThemeProvider } from "styled-components";
import { Outlet } from "react-router";
import Header from "./Header";
import GlobalStyles from "../styles/GlobalStyles";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../features/toggleTheme/themeSlice";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  margin-inline: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 1024px;
    width: 100%;
  }
`;

const ActionsBars = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Applayout = () => {
  const { theme } = useSelector((state: any) => state.theme);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      {/* Global styles */}
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <StyledApp>
          <Header />
          <ActionsBars>
            <Search />
            <Filter />
          </ActionsBars>
          <Outlet />
        </StyledApp>
      </ThemeProvider>
    </>
  );
};
export default Applayout;
