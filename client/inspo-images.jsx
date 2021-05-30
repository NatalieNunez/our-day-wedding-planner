import React from 'react';

function Image(props) {
  const imageUrl = props.image.url;
  const imageId = props.image.imageId;
  return (
    <img src={imageUrl} alt={`image${imageId}`} className="image" />
  );
}

function InspoImages(props) {
  return (
    <div id="img-container">
      {
        props.images.map(image => {
          return <Image key={image.imageId} image={image} />;
        })
      }
    </div>
  );
}

export default InspoImages;
