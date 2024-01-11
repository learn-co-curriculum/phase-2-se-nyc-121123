import "./App.css";
import ContactCard from "./ContactCard";
import Counter from "./Counter";
import { useState } from "react";

import contacts from "./contactData";

function App() {
  const [classname, setClassname] = useState("App");

  const [hideContact, setHideContact] = useState(false);

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
      {/* <Counter /> */}
      <button onClick={handleContacts}>
        {hideContact ? "Show Contacts" : "Hide Contacts"}
      </button>
      <div className="main">
        <div className="selected">
          <h1>Selected Contact</h1>
          {/* render a contact card */}
          
        </div>
        {hideContact ? null : <div className="contacts">{renderContacts}</div>}
      </div>
    </div>
  );
}

export default App;
