import React from 'react';

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.handleUploadClick = this.handleUploadClick.bind(this);
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
      .then(response => {
        form.reset();
      })
      .catch(err => {
        console.error('Error:', err);
      });
    // fetch('/api/uploads')
    //   .then()
    //   .then()
    //   .catch();
  }

  render() {
    return (
      <form id="upload-form" onChange={this.handleSubmit}>
        <input type="file" name="file" ref={this.fileInputRef} hidden/>
        <button className="upload-btn" type="button" onClick={this.handleUploadClick}>
          <i className="fas fa-plus upload-icon"></i>
        </button>
      </form>
    );
  }
}

export default UploadPhotos;
