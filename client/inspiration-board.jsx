import React from 'react';
// import InspoImages from './inspo-images';
import UploadPhotos from './upload-photos';

class InspirationBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: null };
  }

  componentDidMount() {
    fetch('/api/uploads')
      .then(res => res.json())
      .then(images => {
        if (images.length > 0) {
          this.setState({
            images
          });
        }
      });
  }

  render() {
    return (
      <>
        <div id='inspo-board'>
          <span id='inspo-board-header'>Inspiration Board</span>
          <UploadPhotos />
        </div>
      </>
    );
  }
}

export default InspirationBoard;
