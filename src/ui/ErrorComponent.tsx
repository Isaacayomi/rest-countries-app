import styled from "styled-components";

const StyledError = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bolder;
`;

function ErrorComponent() {
  return <StyledError>Country not found!</StyledError>;
}
export default ErrorComponent;
