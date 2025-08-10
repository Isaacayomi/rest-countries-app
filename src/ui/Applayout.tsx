import styled, { ThemeProvider } from "styled-components";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";
import GlobalStyles from "../styles/GlobalStyles";
import Search from "../features/search/Search";
import Filter from "../features/Filter/Filter";
import LIGHT_ARROW from "../assets/images/light-arrow-back.png";
import DARK_ARROW from "../assets/images/dark-arrow-black.png";
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
            <button
              className={`absolute top-20 m-4 ${light === true ? "dark: dark:bg-[#2B3844] dark:text-white dark:shadow-lg" : "bg-white text-[#111517] shadow-lg"}`}
              onClick={() => navigate(-1)}
            >
              <span className="flex flex-row-reverse items-center gap-[0.5rem] px-[1.5rem] py-[0.44rem]">
                <p>Back</p>
                <img
                  src={light === true ? DARK_ARROW : LIGHT_ARROW}
                  alt="back-arrow"
                />
              </span>
            </button>
          )}

          <Outlet />
        </StyledApp>
      </div>
    </>
  );
};
export default Applayout;
