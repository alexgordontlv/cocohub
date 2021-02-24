import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.body{  
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;}
`;
export const loaderStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 100%;
  position: relative;
`;

export const StyledDialog = styled.dialog`
  padding: 0;
  position: fixed;
  border: none;
  background-color: rgba(0, 0, 0, 0.9);
  height: auto;
  width: 100%;
  height: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 300px;
  margin: 3px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 300px;
  height: 200px;
  max-height: 200px;
  max-width: 300px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const StyledFullSizeImage = styled.img`
  height: auto;
  width: auto;
  max-height: 80%;
  max-width: 90%;
`;
