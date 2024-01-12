// NewContact.js

import React, { useState } from "react";

const NewContact = () => {
  return (
    <div className="new-contact">
      <h2>Add New Contact</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div className="form-group">
        <label>Number:</label>
        <input type="text" name="number" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" name="email" />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" />
      </div>
      <button>Add Contact</button>
    </div>
  );
};

export default NewContact;
