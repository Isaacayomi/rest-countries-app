import styled, { ThemeProvider } from "styled-components";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";
import GlobalStyles from "../styles/GlobalStyles";
import Search from "../features/search/Search";
import Filter from "../features/Filter/Filter";
import { useSelector } from "react-redux";

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
  const { light } = useSelector((state: any) => state.theme);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Global styles */}
      <GlobalStyles />
      <div
        className={`min-h-screen ${light === true ? "dark: dark:bg-[#202C36] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
      >
        <StyledApp>
          <Header />
          {location.pathname === "/" ? (
            <ActionsBars>
              <Search />
              <Filter />
            </ActionsBars>
          ) : (
            <button onClick={() => navigate(-1)}>BACK</button>
          )}

          <Outlet />
        </StyledApp>
      </div>
    </>
  );
};
export default Applayout;
