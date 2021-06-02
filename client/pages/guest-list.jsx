import React from 'react';
import Header from '../components/header';
import FilterGuests from '../guest/filter-guests';
import GuestForm from '../guest/guest-form';
import ViewGuests from '../guest/view-guests';

export default class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      number: 0
    };
    this.addGuest = this.addGuest.bind(this);
    this.getFilteredGuests = this.getFilteredGuests.bind(this);
    this.getAllGuests = this.getAllGuests.bind(this);
  }

  componentDidMount() {
    this.getAllGuests();
  }

  getAllGuests() {
    fetch('/api/guests')
      .then(res => res.json())
      .then(guests => {
        const number = guests.length;
        this.setState({
          guests,
          number
        });
      })
      .catch(err => console.error(err));
  }

  getFilteredGuests(newStatus) {
    fetch(`/api/guests/${newStatus}`)
      .then(res => res.json())
      .then(guests => {
        const number = guests.length;
        this.setState({
          guests,
          number
        });
      });
  }

  addGuest(newGuest) {
    fetch('/api/guests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGuest)
    })
      .then(res => res.json())
      .then(newGuest => {
        const newArray = this.state.guests.slice();
        newArray.push(newGuest);
        this.getAllGuests();
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header />
        <FilterGuests filterGuests={this.getFilteredGuests} showAllGuests={this.getAllGuests} number={this.state.number} />
        <ViewGuests guests={this.state.guests} />
        <GuestForm onSubmit={this.addGuest}/>
      </>
    );
  }
}
