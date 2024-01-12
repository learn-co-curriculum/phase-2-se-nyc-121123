import React from "react";

function SelectedContact({ newContact }) {
  return (
    <div className="selected">
      <h1>Selected Contact</h1>
      {/* render a contact card */}
      <p>{newContact.name}</p>
      <p>{newContact.number}</p>
      <p>{newContact.email}</p>
      <p>{newContact.address}</p>
    </div>
  );
}

export default SelectedContact;
