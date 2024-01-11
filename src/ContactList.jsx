import ContactCard from "./ContactCard";

function ContactList({ contacts, getInfo }) {
  const renderContacts = contacts.map((contact, index) => {
    return (
      <ContactCard
        key={index}
        name={contact.name}
        number={contact.number}
        email={contact.email}
        address={contact.address}
        getInfo={getInfo}
      />
    );
  });

  return <div className="contacts">{renderContacts}</div>;
}

export default ContactList;
