function ContactCard({ name, number, email, address, getInfo }) {
  function handleClick() {
    const contact = {
      name: name,
      number: number,
      email: email,
      address: address,
    };

    getInfo(contact);
  }

  return (
    <div className="contact">
      <p>{name}</p>
      {/* <p> {number} </p>
      <p> {email}</p>
      <p> {address}</p> */}
      <button onClick={handleClick}>Select</button>
    </div>
  );
}

export default ContactCard;
