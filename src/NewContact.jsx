import React, { useState } from "react";

const NewContact = ({ getNewContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let newContact = {
      name: name,
      email: email,
      number: number,
      address: address,
    };

    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())
      .then((data) => getNewContact(data));
  }

  return (
    <div className="new-contact">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <label>Name: </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          value={name}
        />

        <label>Number: </label>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          type="text"
          name="number"
          value={number}
        />

        <label>Email: </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          name="email"
          value={email}
        />

        <label>Address: </label>
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          type="text"
          name="address"
          value={address}
        />

        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default NewContact;
