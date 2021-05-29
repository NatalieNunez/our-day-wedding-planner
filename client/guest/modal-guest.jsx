import React from 'react';

class ModalGuest extends React.Component {
  render() {
    return (
        <div id={this.props.isClicked ? 'modal-open' : 'guest-modal'}>
          <div id="guest-modal-box">
            <form id="guest-form">
              <div className="row">
                <button onClick={this.props.onClick}>Cancel</button>
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
        </div>
    );

  }
}

export default ModalGuest;
