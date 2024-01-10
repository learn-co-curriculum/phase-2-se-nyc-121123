function Greeting({ name, age }) {
  // this is how we access a prop
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Age : {age}</p>
    </div>
  );
}

export default Greeting;
