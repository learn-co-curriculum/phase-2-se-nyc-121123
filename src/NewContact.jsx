// NewContact.js

import React, { useState } from "react";

const NewContact = () => {
  return (
    <div className="new-contact">
      <h2>Add New Contact</h2>
      <form className="form-group">
        <label>Name: </label>
        <input type="text" name="name" />

        <label>Number: </label>
        <input type="text" name="number" />

        <label>Email: </label>
        <input type="text" name="email" />

        <label>Address: </label>
        <input type="text" name="Address" />

        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default NewContact;
