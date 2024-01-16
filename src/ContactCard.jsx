import { useState } from "react";

function ContactCard({
  id,
  name,
  number,
  email,
  address,
  getInfo,
  onDelete,
  isFriend,
}) {
  const [friend, setFriend] = useState(isFriend);

  function handleClick() {
    const contact = {
      name: name,
      number: number,
      email: email,
      address: address,
    };

    getInfo(contact);
  }

  function handleDelete() {
    console.log(id);
    fetch("http://localhost:4000/contacts/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDelete(id));
  }

  function handleFriends() {
    fetch("http://localhost:4000/contacts/" + id, {
      method: "PATCH",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        isFriend: !friend,
      }),
    })
      .then((res) => res.json())
      .then((data) => setFriend(data.isFriend));
  }

  return (
    <div className="contact">
      <p>{name}</p>
      <p onClick={handleFriends}>{friend ? "👍" : "👎"}</p>
      {/* <p> {number} </p>
      <p> {email}</p>
      <p> {address}</p> */}
      <button onClick={handleClick}>Select</button>
      <button onClick={handleDelete} id={"delete"}>
        Delete
      </button>
    </div>
  );
}

export default ContactCard;
