import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #111517; /* light mode border */
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @media (prefers-color-scheme: dark) {
    border-color: #ffffff; /* dark mode border */
    border-bottom-color: transparent;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return (
    <StyledLoader>
      <Spinner />
    </StyledLoader>
  );
}

export default Loader;
