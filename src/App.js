import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
import contacts from "./contactData";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import NewContact from "./NewContact";

function App() {
  const [classname, setClassname] = useState("App");

  const [hideContact, setHideContact] = useState(false);

  const [newContact, setNewContact] = useState({});

  function getData(data) {
    console.log(data);
    setNewContact(data);
  }

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
          <p>{newContact.name}</p>
          <p>{newContact.number}</p>
          <p>{newContact.email}</p>
          <p>{newContact.address}</p>
        </div>
        {hideContact ? null : (
          <ContactList getInfo={getData} contacts={contacts} />
        )}
      </div>
      <NewContact />
    </div>
  );
}

export default App;
