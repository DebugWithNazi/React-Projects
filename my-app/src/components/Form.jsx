import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleClick(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          placeholder="Enter your name"
          value={name.firstName}
        />

        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          placeholder="Enter Last Name"
          value={name.lastName}
        />
        <button onClick={(e) => handleClick(e)}>Submit</button>
      </form>
    </div>
  );
}
