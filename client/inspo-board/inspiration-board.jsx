import React from 'react';
import InspoImages from './inspo-images';
import UploadPhotos from './upload-photos';

class InspirationBoard extends React.Component {
  constructor(props) {
    super(props);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.getAllImages = this.getAllImages.bind(this);
    this.state = {
      images: [],
      submitted: false
    };
  }

  componentDidMount() {
    this.getAllImages();
  }

  checkSubmit() {
    fetch('/api/uploads')
      .then(res => res.json())
      .then(images => {
        this.setState({
          images,
          submitted: true
        });
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }

  getAllImages() {
    fetch('/api/uploads')
      .then(res => res.json())
      .then(images => {
        if (images.length > 0) {
          this.setState({
            images
          });
        }
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }

  render() {
    return (
      <>
        <div id='inspo-board'>
          <UploadPhotos submitUpdate={this.checkSubmit} />
          <InspoImages images={this.state.images} />
        </div>
      </>
    );
  }
}

export default InspirationBoard;
