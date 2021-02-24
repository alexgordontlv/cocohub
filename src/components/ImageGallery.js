import React, { useState, useEffect, useRef } from "react";
import {
  StyledDialog,
  StyledImage,
  StyledFullSizeImage,
  StyledDiv,
  WrapperDiv,
  loaderStyle,
} from "./imagegallery.styles";
import ClipLoader from "react-spinners/ClipLoader";

const ImageGallery = ({ imageNumber }) => {
  const [open, setOpen] = useState(false);
  const [imageArray, setImageArray] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  let counterRef = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        const parsedData = await response.json();
        setImageArray(parsedData);
      } catch (error) {
        setFetching(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onImageClick = (image) => {
    setSelectedImage(image);
    setOpen(!open);
  };

  const imageLoaded = () => {
    counterRef.current += 1;
    console.log(counterRef);
    if (counterRef.current >= imageNumber - 2) {
      setFetching(false);
    }
  };

  return (
    <WrapperDiv>
      <div style={loaderStyle}>
        <ClipLoader color="gray" loading={fetching} size={50} />
      </div>
      {imageArray.map(
        (image, index) =>
          index < imageNumber && (
            <StyledDiv style={{ visibility: fetching ? "hidden" : "visible" }}>
              <StyledImage
                key={image.id}
                src={image.download_url}
                alt={image.author}
                onLoad={imageLoaded}
                onClick={() => onImageClick(image)}
              />
            </StyledDiv>
          )
      )}
      {open && (
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
      )}
    </WrapperDiv>
  );
};

export default ImageGallery;
