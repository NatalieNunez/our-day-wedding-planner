import React from 'react';

class ModalGuest extends React.Component {
  render() {
    return (
      <div id="guest-modal">
        <form id="guest-form">
          <div className="row">
            <button>Cancel</button>
            <button type="submit">Save</button>
            <div className="divider"></div>
          </div>
          <div className="row">
            <label>Add Guest</label>
            <input required autoFocus id="first-name" type="text" />
            <input required autoFocus id="last-name" type="text"/>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalGuest;
