import "./App.css";
import ContactCard from "./ContactCard";

function App() {
  const contacts = [
    {
      name: "Mohammad",
      number: 123123213,
      email: "mohammad@gmail.com",
      address: "11 broadway",
    },
    {
      name: "Aaron",
      number: 123123213,
      email: "Aaron@gmail.com",
      address: "11 broadway",
    },
    {
      name: "Jaeem",
      number: 123123213,
      email: "jaeem@gmail.com",
      address: "11 broadway",
    },
  ];

  const renderContacts = contacts.map((contact, index) => {
    return (
      <ContactCard
        key={index}
        name={contact.name}
        number={contact.number}
        email={contact.email}
        address={contact.address}
      />
    );
  });

  return <div className="App">{renderContacts}</div>;
}

export default App;
