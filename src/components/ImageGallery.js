import React, { useState, useEffect, useRef } from "react";
import {
  StyledImage,
  StyledDiv,
  WrapperDiv,
  loaderStyle,
} from "./imagegallery.styles";
import DialogBox from "./DialogBox";
import ClipLoader from "react-spinners/ClipLoader";

const ImageGallery = ({ imageNumber }) => {
  const [imageArray, setImageArray] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  let counterRef = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        const parsedData = await response.json();
        setImageArray(parsedData.slice(0, imageNumber));
      } catch (error) {
        setFetching(false);
        console.log(error);
      }
    };
    fetchData();
  }, [imageNumber]);

  const onImageClick = (image) => {
    setSelectedImage(image);
  };

  const onImageLoaded = () => {
    counterRef.current += 1;
    console.log(counterRef.current);
    if (counterRef.current >= imageNumber - 2) {
      setFetching(false);
    }
  };

  return (
    <WrapperDiv>
      <div style={loaderStyle}>
        <ClipLoader color="gray" loading={fetching} size={50} />
      </div>
      {imageArray.map((image) => (
        <StyledDiv
          style={{ visibility: fetching ? "hidden" : "visible" }}
          key={image.id}
        >
          <StyledImage
            src={image.download_url}
            alt={image.author}
            onLoad={onImageLoaded}
            onClick={() => onImageClick(image)}
          />
        </StyledDiv>
      ))}
      {selectedImage && (
        <DialogBox
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </WrapperDiv>
  );
};

export default ImageGallery;
