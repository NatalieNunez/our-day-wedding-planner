import React from 'react';

class FilterGuests extends React.Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
    this.allGuests = this.allGuests.bind(this);
    this.state = {
      number: 0
    };
  }

  changeView(event) {
    const newStatus = event.target.innerText.toLowerCase();
    this.props.filterGuests(newStatus);
  }

  allGuests() {
    this.props.showAllGuests();
  }

  render() {
    return (
      <div className="filter-bar">
        <div className="view-options">
          <button className="view-btn" onClick={this.allGuests}>All</button>
          <button className="view-btn" onClick={this.changeView}>Invited</button>
          <button className="view-btn" onClick={this.changeView}>Attending</button>
          <button className="view-btn" onClick={this.changeView}>Not Attending</button>
        </div>
        <span className="number-guests">{`${this.state.number} guests`}</span>
        <div className="divider filter-guests"></div>
      </div>
    );
  }

}

export default FilterGuests;
