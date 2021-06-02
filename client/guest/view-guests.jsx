import React from 'react';

function Guest(props) {
  const guestName = `${props.guest.firstName} ${props.guest.lastName}`;
  const status = props.guest.status;
  const shortStatus = status.slice(0, 3);
  return (
    <>
    <div className="guest-row">
      {guestName}
      <div className={`guest-status ${shortStatus}`}>{status}</div>
    </div>
    <div className="divider profile"></div>
    </>
  );
}

function ViewGuests(props) {
  return (
    <div id="guest-container">
      {
        props.guests.map(guest => {
          return <Guest key={guest.guestId} guest={guest} />;
        })
      }
    </div>
  );
}

export default ViewGuests;
