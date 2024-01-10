import "./App.css";
import ContactCard from "./ContactCard";
import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [classname, setClassname] = useState("App");

  const [hideContact, setHideContact] = useState(false);

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

  function handleClick() {
    if (classname === "App dark") {
      setClassname("App");
    } else {
      setClassname("App dark");
    }
  }

  function handleContacts() {
    setHideContact(!hideContact);
  }

  return (
    <div className={classname}>
      <button onClick={handleClick}>
        {classname === "App" ? "Dark mode" : "Light Mode"}
      </button>
      <Counter />
      <button onClick={handleContacts}>
        {hideContact ? "Show Contacts" : "Hide Contacts"}
      </button>
      {hideContact ? null : <div className="contacts">{renderContacts}</div>}
    </div>
  );
}

export default App;
