import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images
    ? props.images.map((image) => {
        return <ImageCard image={image} id={image.id} />;
      })
    : "no image found";

  return <div className="image-list">{images}</div>;
};

export default ImageList;
