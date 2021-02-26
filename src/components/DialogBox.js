import React, { useEffect } from "react";
import { StyledDialog, StyledFullSizeImage } from "./imagegallery.styles";

const DialogBox = ({ setSelectedImage, selectedImage }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <StyledDialog
      open
      onClick={() => {
        setSelectedImage(null);
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
