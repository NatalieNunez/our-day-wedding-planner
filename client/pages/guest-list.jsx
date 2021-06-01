import React from 'react';
import Header from '../components/header';
import GuestForm from '../guest/guest-form';

export default class GuestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: []
    };
    this.addGuest = this.addGuest.bind(this);
  }

  componentDidMount() {
    this.getAllGuests();
  }

  getAllGuests() {
    fetch('/api/guests')
      .then(res => res.json())
      .then(guests => {
        this.setState({
          guests
        });
      })
      .catch(err => console.error(err));
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
        this.setState({
          guests: newArray
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header />
        <GuestForm onSubmit={this.addGuest}/>
      </>
    );
  }
}
