import styled from "styled-components";

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

export const StyledDialog = styled.dialog`
  position: absolute;
  border: none;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  top: 0px;
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
