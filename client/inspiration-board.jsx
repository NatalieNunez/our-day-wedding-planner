import React from 'react';
import InspoImages from './inspo-images';
import UploadPhotos from './upload-photos';

class InspirationBoard extends React.Component {
  render() {
    return (
      <div id='inspo-board'>
        <span id='inspo-board-header'>Inspiration Board</span>
        <UploadPhotos />
        <InspoImages />
      </div>
    );
  }
}

export default InspirationBoard;
