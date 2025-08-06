import styled from "styled-components";
import LIGHT_MOON from "../assets/images/light-moon.png";

const H1 = styled.h1`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.25rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const StyledNav = styled.nav`
  color: #111517;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-block: 1.88rem;
  background-color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
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
