import React from 'react';

class InspoImages extends React.Component {
  render() {
    return (
      <div className='images-container'>
        <div className='row'>
          <img src="../server/public/images/placeholder-image.jpeg" alt="" className="col-third" />
          <img src="" alt="" className="col-third" />
          <img src="" alt="" className="col-third" />
        </div>
        <div className='row'>
          <img src="" alt="" className="col-third" />
          <img src="" alt="" className="col-third" />
          <img src="" alt="" className="col-third" />
        </div>
        <div className='row'>
          <img src="" alt="" className="col-third" />
          <img src="" alt="" className="col-third" />
          <img src="" alt="" className="col-third" />
        </div>
      </div>
    );
  }
}

export default InspoImages;
