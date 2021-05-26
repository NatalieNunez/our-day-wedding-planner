import React from 'react';
import InspoImages from './inspo-images';
import UploadPhotos from './upload-photos';

function InspirationBoard() {
  return (
    <div id='inspo-board'>
      <span id='inspo-board-header'>Inspiration Board</span>
      <UploadPhotos />
      <InspoImages />
    </div>
  );
}

export default InspirationBoard;
