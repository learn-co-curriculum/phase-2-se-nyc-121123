import ContactCard from "./ContactCard";

function ContactList({ contacts, getInfo, onDelete }) {
  console.log(contacts);
  const renderContacts = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        email={contact.email}
        address={contact.address}
        getInfo={getInfo}
        onDelete={onDelete}
        isFriend={contact.isFriend}
      />
    );
  });

  return <div className="contacts">{renderContacts}</div>;
}

export default ContactList;
