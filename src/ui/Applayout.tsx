import { Outlet } from "react-router";
import Header from "./Header";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Search from "../components/Search";
import Filter from "../components/Filter";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  margin-inline: auto;

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
  return (
    <>
      {/* Global styles */}
      <GlobalStyles />

      <StyledApp>
        <Header />
        <ActionsBars>
          <Search />
          <Filter />
        </ActionsBars>
        <Outlet />
      </StyledApp>
    </>
  );
};
export default Applayout;
