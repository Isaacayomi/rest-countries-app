import { Outlet } from "react-router";
import Header from "./Header";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Applayout = () => {
  return (
    <>
      {/* Global styles */}
      <GlobalStyles />

      <StyledApp>
        <Header />
        <Outlet />
      </StyledApp>
    </>
  );
};
export default Applayout;
