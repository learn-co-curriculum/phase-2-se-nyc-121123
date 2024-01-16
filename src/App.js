import "./App.css";
import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import SelectedContact from "./SelectedContact";

function App() {
  const [classname, setClassname] = useState("App");

  const [hideContact, setHideContact] = useState(false);

  const [newContact, setNewContact] = useState({});

  const [contacts, setContacts] = useState([]);

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

  function onDelete(id) {
    console.log(id);

    const filteredArray = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredArray);
  }

  useEffect(() => {
    fetch("http://localhost:4000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

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
          <ContactList
            getInfo={getData}
            contacts={contacts}
            onDelete={onDelete}
          />
        )}
      </div>
      {/* rendering the form */}
      {showForm ? <NewContact getNewContact={getNewContact} /> : null}
    </div>
  );
}

export default App;
