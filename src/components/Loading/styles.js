import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 28px;
  height: 28px;
  margin: 2rem auto;

  border: 3px solid;
  border-color: #afafaf #888888 #363636 transparent;
  border-radius: 50%;

  animation: spin 0.4s linear infinite;

  @keyframes spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
`;