import React from "react";

function SelectedContact({ newContact }) {
  return (
    <div className="selected">
      <h1>Selected Contact</h1>
      {/* render a contact card */}
      <h3>{newContact.name}</h3>
      <h3>{newContact.number}</h3>
      <h3>{newContact.email}</h3>
      <h3>{newContact.address}</h3>
    </div>
  );
}

export default SelectedContact;
