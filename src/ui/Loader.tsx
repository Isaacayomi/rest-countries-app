import { useSelector } from "react-redux";
import styled from "styled-components";

interface RootState {
  theme: {
    light: boolean;
  };
}

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.div<{ $borderColor: string }>`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ $borderColor }) => $borderColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;

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
  const light = useSelector((state: RootState) => state.theme.light);

  return (
    <StyledLoader>
      <Spinner
        key={light ? "light" : "dark"}
        $borderColor={light ? "#111517" : "#ffffff"}
      />
    </StyledLoader>
  );
}

export default Loader;
