import "./App.css";
import { useState } from "react";
import contactData from "./contactData";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import SelectedContact from "./SelectedContact";

function App() {
  const [classname, setClassname] = useState("App");

  const [hideContact, setHideContact] = useState(false);

  const [newContact, setNewContact] = useState({});

  const [contacts, setContacts] = useState(contactData);

  const [showForm, setShowForm] = useState(true);

  function getNewContact(newContact) {
    let newContactList = [...contacts, newContact];
    console.log(newContactList);
    setContacts(newContactList);
  }

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

  function handleToggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div className={classname}>
      <button onClick={handleClick}>
        {classname === "App" ? "Dark mode" : "Light Mode"}
      </button>
      <button onClick={handleContacts}>
        {hideContact ? "Show Contacts" : "Hide Contacts"}
      </button>

      <button onClick={handleToggleForm}>Hide Form</button>
      {/* rendering the contacts */}
      <div className="main">
        <SelectedContact newContact={newContact} />
        {hideContact ? null : (
          <ContactList getInfo={getData} contacts={contacts} />
        )}
      </div>
      {/* rendering the form */}
      {showForm ? <NewContact getNewContact={getNewContact} /> : null}
    </div>
  );
}

export default App;
