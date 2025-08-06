import styled from "styled-components";
import LIGHT_MOON from "../assets/images/light-moon.png";

const H1 = styled.h1`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.25rem;
`;

const StyledNav = styled.nav`
  color: #111517;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-block: 1.88rem;
  background-color: white;
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
`;

function Header() {
  return (
    <StyledNav>
      <H1>Where in the world?</H1>
      <Span>
        <Mode>Dark Mode</Mode>
        <img src={LIGHT_MOON} alt="light-moon" />
      </Span>
    </StyledNav>
  );
}
export default Header;
