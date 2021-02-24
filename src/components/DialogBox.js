import React from "react";
import { StyledDialog, StyledFullSizeImage } from "./imagegallery.styles";

const DialogBox = ({ setSelectedImage, setOpen, open, selectedImage }) => {
  return (
    <StyledDialog
      open
      onClick={() => {
        setSelectedImage(null);
        setOpen(!open);
      }}
    >
      <StyledFullSizeImage
        src={selectedImage.download_url}
        alt={selectedImage.author}
        width="1000"
        height="800"
      />
    </StyledDialog>
  );
};

export default DialogBox;
