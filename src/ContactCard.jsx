function ContactCard({ name, number, email, address }) {
  return (
    <div className="contact">
      <p>{name}</p>
      <p> {number} </p>
      <p> {email}</p>
      <p> {address}</p>
      <button>Select</button>
    </div>
  );
}

export default ContactCard;
