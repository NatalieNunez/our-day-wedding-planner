import React from 'react';

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUploadClick() {
    this.fileInputRef.current.click();
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('upload-form');
    const formData = new FormData(form);
    fetch('/api/uploads', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(image => {
        form.reset();
        this.props.submitUpdate(image);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }

  render() {
    return (
      <form id="upload-form" onChange={this.handleSubmit}>
        <span id='inspo-board-header'>Inspiration Board</span>
        <input type="file" name="file" ref={this.fileInputRef} hidden/>
        <button className="upload-btn" type="button" onClick={this.handleUploadClick}>
          <i className="fas fa-plus upload-icon"></i>
        </button>
      </form>
    );
  }
}

export default UploadPhotos;
