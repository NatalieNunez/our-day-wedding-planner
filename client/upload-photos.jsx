import React from 'react';

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <i className="fas fa-plus upload-icon"></i>
    );
  }
}

export default UploadPhotos;
